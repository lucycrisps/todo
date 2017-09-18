// When DOM Ready
$(document).ready(function() {
    todo.init();
});

var numLists;
var newList;

var todo = {

	/** = init all functions **/

    init: function() {
        todo.fallbacks();
        todo.welcome();
        todo.gridInit();
        todo.listUtils();
        todo.addToDo();
        todo.listTitle();
        todo.addList();
        todo.deleteList();
        todo.completeToDo();
        todo.deleteToDo(); 
    },

    fallbacks: function() {

    	// SVG fallback
	    if (!Modernizr.svg) {
	        var imgs = document.getElementsByTagName('img');
	        var dotSVG = /.*\.svg$/;
	        for (var i = 0; i != imgs.length; ++i) {
	            if(imgs[i].src.match(dotSVG)) {
	                imgs[i].src = imgs[i].src.slice(0, -3) + "png";
	            }
	        }
	    }
    },

    welcome: function() {
        // prevent UI scroll bug on mobile while welcome screen is shown
        $('body').css('overflow', 'hidden');

        // fade in content
        setTimeout(function(){
            $('body').addClass('fadein');
        }, 700);
        setTimeout(function(){
            $('.welcome__content').addClass('fadein');
        }, 1500);

        // put cursor in input field ready for user
        $('#welcomeForm input').focus();

        $('#userName').keydown(function(e){
            var input = $(this);

            // if enter key is pressed
            if(e.keyCode == 13){
                // prevent default (do not submit form and relaod page)
                e.preventDefault();

                if (input.val() != '') {
                    var name = input.val();

                    // if input is NOT empty, call addTodoItem function
                    $('.welcome').fadeOut('slow');

                    if (name.endsWith('s')) {
                        $('h1').html(name + '\' to do list');
                    } else {
                        $('h1').html(name + '\'s to do list');
                    }

                    // remove focus from input
                    $('#userName').blur();
                    // make sure user is taken to top of page (especially mobile)
                    $('html, body').animate({scrollTop: '0px'}, 300);
                    // reset body overflow
                    $('body').css('overflow', 'auto');
                    // fade in total wrapper
                    $('.total-wrapper').addClass('fadein');

                } else {
                    // if input is empty, prompt user to type a to do
                    input.attr('placeholder', 'Type your name here!');
                }      
            }
        });

    },

    gridInit: function() {

        // initialise isotope layout grid

        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            columnWidth: '.grid-sizer'
          }
        })

    },

    listUtils: function() {

        $('.main-wrapper').on('click', '.menu-open-button', function(e) {
            e.preventDefault();

            $(this).parent().toggleClass('checked');

        });

    },  

    addList: function() {

        $('#addList').click(function() {
            // find number of lists on page
            numLists = $('.list-wrap').length;

            // clone a list to create a new list
            newList = $('.list-wrap.hide').clone();

            // show new list
            newList.removeClass('hide');
            // give the new list a unique id
            newList.attr('id', 'list_' + (numLists + 1));
            // add editing class to list
            newList.addClass('editing');
            // insert input for list name
            newList.find('h3').html('<form><input type="text" class="list-title" placeholder="Name your new list" /></form>');

            // give form unique id
            newList.find('form').attr('name', 'newToDo_' + (numLists + 1));
            // give input unique id
            newList.find('input').attr('name', 'toDoItem_' + (numLists + 1));

            // prepend to list container so new list appears at first position
            $('.lists-container').prepend(newList).isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
            newList.find('.list-title').focus();
        })

    },

    listTitle: function() {


        $('.main-wrapper').on('keydown', '.list-title', function(e) {
            var input = $(this);
            var titleElement = $(this).parents('h3');

            // if enter key is pressed
            if(e.keyCode == 13){
                // prevent default (do not submit form and relaod page)
                e.preventDefault();

                if (input.val() != '') {
                    var name = input.val();

                    // if input is NOT empty, use value to create form title
                    titleElement.html(name);
                    titleElement.parents('.list-wrap').removeClass('editing');
                    titleElement.siblings('.list__main').find('input').focus();

                }    
            }
        });

    },

    deleteList: function() {

        // delete list

        $('.main-wrapper').on('click', '.list__delete', function(e) {
            e.preventDefault();
            $(this).closest('.list').slideUp().promise().done(function() {
                // when animation is complete, reshuffle list to fill empty space
                $('.lists-container').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
                $(this).closest('.list').remove();
            });
        });

    },

    addToDo: function() {

        function addTodoItem(inputName) {

            // find input that was submitted
            var item = $('input[name="' + inputName +'"]');
            var todoItem = item.val();
            
            // add new item to current list
            item.parent().siblings('ol').append('<li>' + todoItem + '<span class="item__delete"></span></li>').promise().done(function() {

                // empty new list item input
                // remove focus from input
                $('.list__additem').val("").blur();

                // initialise grid layout to accommodate new list length
                todo.gridInit();

            });
        }
        

        $('.main-wrapper').on('keydown', '.list__additem', function(e) {
            var input = $(this);
            var inputName = input.attr('name');

            // if enter key is pressed
            if(e.keyCode == 13){
                // prevent default (do not submit form and relaod page)
                e.preventDefault();

                if (input.val() != '') {
                    // if input is NOT empty, call addTodoItem function
                    addTodoItem(inputName)
                } else {
                    // if input is empty, prompt user to type a to do
                    input.attr('placeholder', 'Please enter a todo');
                }      
            }
        });
      
    },

    completeToDo: function() {

        // strike through todos when complete

        $('.main-wrapper').on('click', '.list__main ol li', function() {
            $(this).toggleClass('complete');
        })

    },

    deleteToDo: function() {

        // delete a to do from the list
        $('.main-wrapper').on('click', '.item__delete', function() {
            $(this).parent().slideUp().promise().done(function() {
                // when animation is complete, reshuffle list to fill empty space
                $('.lists-container').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
            });
            $('.lists-container').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
        })

    }


};  // END var



    


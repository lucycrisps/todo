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
        todo.addToDo();
        todo.listTitle();
        todo.listUtils();
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
                    $('.welcome').fadeOut();

                    if (name.endsWith('s')) {
                        $('h1').html(name + '\' to do list');
                    } else {
                        $('h1').html(name + '\'s to do list');
                    }
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

    addList: function() {

        $('#addList').click(function() {
            // find number of lists on page
            numLists = $('.list-wrap').length;

            // clone a list to create a new list
            newList = $('.list-wrap:first').clone();

            // give the new list a unique id
            newList.attr('id', 'list_' + (numLists + 1));
            // insert input for list name
            newList.find('h3').html('<form><input type="text" class="list-title" placeholder="Name your new list" /></form>');
            // remove all items from list 
            newList.find('.list__main li').remove();
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

        $('.list-title').keydown(function(e){
            var input = $(this);

            // if enter key is pressed
            if(e.keyCode == 13){
                // prevent default (do not submit form and relaod page)
                e.preventDefault();

                if (input.val() != '') {
                    var name = input.val();

                    // if input is NOT empty, use value to create form title
                    $(this).parents('h3').html(name);
                }    
            }
        });

    },

    deleteList: function() {

        // delete list

        $('.list__delete').click(function(e) {
            e.preventDefault();
            $(this).closest('.list').slideUp();
        });

    },

    addToDo: function() {

        function addTodoItem(inputName) {

            // find input that was submitted
            var item = $('input[name="' + inputName +'"]');
            var todoItem = item.val();
            
            // add new item to current list
            item.parent().siblings('ol').append('<li>' + todoItem + '<span class="item__delete"></span></li>');
    
            // empty new list item input
            $('.list__additem').val("");

            // initialise grid layout to accommodate new list length
            todo.gridInit();
        }
    
        $('.list__additem').keydown(function(e){
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

    listUtils: function() {

        // trigger utility nav

        $('.utils-trigger').click(function() {
            $(this).toggleClass('open');
        })

    },

    completeToDo: function() {

        // strike through todos when complete

        $('body').on('click', '.list__main ol li', function() {
            $(this).toggleClass('complete');
        })

    },

    deleteToDo: function() {

        // delete a to do from the list
        $('body').on('click', '.item__delete', function() {
            $(this).parent().slideUp();
        })

    }


};  // END var



    


// When DOM Ready
$(document).ready(function() {
    todo.init();
});

var todo = {

	/** = init all functions **/

    init: function() {
        todo.fallbacks();
        todo.addToDo();
        todo.listUtils();
        todo.addList();
        todo.deleteList();
        todo.completeToDo();
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

    addList: function() {

        var newList = $('.new-list').html();

        $('#addList').click(function() {
            console.log('hi');
            $('.lists-container').append(newList);
        })
    },

    deleteList: function() {

        $('.list__delete').click(function(e) {
            e.preventDefault();
            $(this).closest('.list').slideUp();
        });

    },

    addToDo: function() {
        $('#addToList').click(function(){
            var toAdd = $('input[name=toDoItem]').val();
            $('.list__main ol').append('<li>' + toAdd + '</li>');
            $('input[name=toDoItem]').val("");
        });
       
       	$("input[name=toDoItem]").keydown(function(event){
			if(event.keyCode == 13){
            	$('#addToList').click();
          	}         
      	});
      
      	$(document).on('dblclick','li', function(){
        	$(this).toggleClass('strike').fadeOut('slow');    
      	});
      
      	$('input').focus(function() {
        	$(this).val('');
      	});
      
    },

    listUtils: function() {

        $('.utils-trigger').click(function() {
            $(this).toggleClass('open');
        })

    },

    completeToDo: function() {

        $('.list__main ol li').click(function() {
            $(this).toggleClass('complete');
        })

    }


};  // END var



    


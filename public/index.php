<?php include ('header.php'); ?>

    <?php $i = 0; // $i is set as a counter for each list ?> 
        
    <div class="grid gutter-container lists-container">
        <div class="grid-sizer col-1-3 col-1-2--med col-1-1--s"></div>

        <div class="list-wrap grid-item col-1-3 col-1-2--med col-1-1--s">
            <div class="list">
                <h3 class="list__title">Books to read</h3>

                <div class="list__main">
                    <ol>
                        <li>To Kill a Mockingbird<span class="item__delete"></span></li>    
                        <li>The Girl with all the Gifts<span class="item__delete"></span></li>
                        <li class="complete">Dark Matter<span class="item__delete"></span></li>
                        <li>Fight Club<span class="item__delete"></span></li>
                        <li>Dune<span class="item__delete"></span></li>
                        <li class="complete">Bird Box<span class="item__delete"></span></li>
                        <li>Emma<span class="item__delete"></span></li>
                    </ol>

                    <form class="list__form" name="newToDo">
                        <input type="text" class="list__additem" name="toDoItem" placeholder="Add todo" />
                    </form>
            
                </div>

                <?php include ('partials/list-utilities.php'); ?>
            </div>
        </div>
    </div>

<?php include ('footer.php'); ?>
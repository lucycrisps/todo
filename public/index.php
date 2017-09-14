<?php include ('header.php'); ?>

    <?php $i = 0; ?>
    
    <div class="new-list">
        <div class="list col-1-4">
            <h3 class="list__title">New List</h3>

            <div class="list__main">
                <ol>
                    
                </ol>

                <form class="list__form" name="newToDo">
                    <input type="text" name="toDoItem" placeholder="Add todo" />
                </form>
        
                <span id="addToList" class="button">Add</span>
            </div>

            <?php include ('partials/list-utilities.php'); ?>
        </div>
    </div>
    
    <div class="gutter-container lists-container">
        <div class="list col-1-4">
            <h3 class="list__title">Work</h3>

            <div class="list__main">
                <ol>
                    <li>Build a website</li>    
                    <li>Make a to do list</li>
                    <li>Learn stuff</li>
                </ol>

                <form class="list__form" name="newToDo">
                    <input type="text" name="toDoItem" placeholder="Add todo" />
                </form>
        
                <span id="addToList" class="button">Add</span>
            </div>

            <?php include ('partials/list-utilities.php'); ?>
        </div>
    </div>

<?php include ('footer.php'); ?>
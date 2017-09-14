<nav class="menu">
    <input type="checkbox" href="#" class="menu-open" name="menu-open-<?php echo $i; ?>" id="menu-open-<?php echo $i; ?>"/>
    <label class="menu-open-button" for="menu-open-<?php echo $i; ?>">
        <span class="hamburger hamburger-1"></span>
        <span class="hamburger hamburger-2"></span>
        <span class="hamburger hamburger-3"></span>
    </label>
  
    <a href="#" class="list__delete menu-item"> <i class="fa fa-trash-o"></i> </a>
    <a href="#" class="menu-item"> <i class="fa fa-share-alt"></i> </a>
    <a href="#" class="menu-item"> <i class="fa fa-heart"></i> </a>
</nav>

<?php $i++; ?>
<?php echo $__env->yieldPushContent('before-footer-resources'); ?>
<!-- Core -->
<script src="<?php echo e(asset(config('themes.assets.' . session('theme')) . '/assets/vendor/jquery/jquery.min.js')); ?>"></script>
<script src="<?php echo e(asset(config('themes.assets.' . session('theme')) . '/assets/vendor/popper/popper.min.js')); ?>"></script>
<script src="<?php echo e(asset(config('themes.assets.' . session('theme')) . '/assets/vendor/bootstrap/bootstrap.min.js')); ?>"></script>
<script src="<?php echo e(asset(config('themes.assets.' . session('theme')) . '/assets/vendor/headroom/headroom.min.js')); ?>"></script>
<!-- Argon JS -->
<script src="<?php echo e(asset(config('themes.assets.' . session('theme')) . '/assets/js/argon.js?v=1.0.1')); ?>"></script>

<?php echo $__env->yieldPushContent('after-footer-resources'); ?>

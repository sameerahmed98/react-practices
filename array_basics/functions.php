<?php
add_action('wp_footer', 'add_form_total_to_cart');
function add_form_total_to_cart() {
    $ajax_nonce = wp_create_nonce('add-total-to-cart-nonce');
    ?>
        <script type="text/javascript">
jQuery(document).ready(function($) {
    var formTotalStep1 = 0;
    var formTotalStep2 = 0;
    var ajaxUrl = '<?php echo admin_url('admin-ajax.php'); ?>';
    var nonce = '<?php echo $ajax_nonce; ?>';

    // Capture total from the first part of the form
    $('#field_fl4e7, #field_q9hv0, #field_qjo65, #field_oyxba, #field_gc510').on('change', function() {
        formTotalStep1 = 0; // Reset total for step 1
        // Sum up the values from all fields in step 1
        $('#field_fl4e7, #field_q9hv0, #field_qjo65, #field_oyxba, #field_gc510').each(function() {
            var value = parseFloat($(this).val()) || 0;
            formTotalStep1 += value;
        });
        console.log('Total captured from Step 1: ' + formTotalStep1);
    });

    // Optionally, capture total from the second part of the form (if exists)
    // $('.your-second-step-field-selector').on('change', function() {
    //     formTotalStep2 = parseFloat($(this).val()) || 0;
    //     console.log('Total captured from Step 2: ' + formTotalStep2);
    // });

    // Bind to final form submission
    $(document).on('click', 'button.frm_button_submit.frm_final_submit', function() {
        console.log('Final submit clicked');
        var finalTotal = formTotalStep1 + formTotalStep2;
        if (finalTotal > 0) {
            $.ajax({
                url: ajaxUrl,
                type: 'POST',
                data: {
                    action: 'add_total_to_cart',
                    total: finalTotal,
                    nonce: nonce
                },
                success: function(response) {
                    console.log('Total added to cart: ' + finalTotal);
                    if (response == 'success') {
                        setTimeout(function() {
                            window.location.href = '<?php echo wc_get_cart_url(); ?>';
                        }, 2000); // Delay for redirection
                    } else {
                        console.error('Error adding product to cart');
                    }
                },
                error: function(xhr, status, error) {
                    console.error('AJAX Error: ' + status + ' - ' + error);
                }
            });
        }
    });
});
</script>
    <?php
}







add_action('wp_footer', 'add_form_total_to_cart');
function add_form_total_to_cart() {
    // Generate nonce for both logged-in and non-logged-in users
    $ajax_nonce = wp_create_nonce('add-total-to-cart-nonce');
    ?>
    
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            var formTotalStep1 = 0;
            var formTotalStep2 = 0;
            var ajaxUrl = '<?php echo admin_url('admin-ajax.php'); ?>';
            var nonce = '<?php echo $ajax_nonce; ?>';

            // Capture total from the first part of the form
            $('#field_fl4e7, #field_q9hv0, #field_qjo65, #field_oyxba, #field_gc510').on('change', function() {
                formTotalStep1 = 0; // Reset total for step 1
                // Sum up the values from all fields in step 1
                $('#field_fl4e7, #field_q9hv0, #field_qjo65, #field_oyxba, #field_gc510').each(function() {
                    var value = parseFloat($(this).val()) || 0;
                    formTotalStep1 += value;
                });
                console.log('Total captured from Step 1: ' + formTotalStep1);
            });

            // Optionally, capture total from the second part of the form (if exists)
            // $('.your-second-step-field-selector').on('change', function() {
            //     formTotalStep2 = parseFloat($(this).val()) || 0;
            //     console.log('Total captured from Step 2: ' + formTotalStep2);
            // });

            // Bind to final form submission
            $(document).on('click', 'button.frm_button_submit.frm_final_submit', function() {
                console.log('Final submit clicked');
                var finalTotal = formTotalStep1 + formTotalStep2;
                if (finalTotal > 0) {
                    $.ajax({
                        url: ajaxUrl,
                        type: 'POST',
                        data: {
                            action: 'add_total_to_cart',
                            total: finalTotal,
                            nonce: nonce
                        },
                        success: function(response) {
                            console.log('Total added to cart: ' + finalTotal);
                            if (response == 'success') {
                                setTimeout(function() {
                                    window.location.href = '<?php echo wc_get_cart_url(); ?>';
                                }, 2000); // Delay for redirection
                            } else {
                                console.error('Error adding product to cart');
                            }
                        },
                        error: function(xhr, status, error) {
                            console.error('AJAX Error: ' + status + ' - ' + error);
                        }
                    });
                }
            });
        });
    </script>
    <?php
}

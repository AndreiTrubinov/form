$(function(){
    
        let numberOfLicenses = 1;
        let priceOfLicense;
        
        $('input[type="radio"]').on('click change', function(){
            priceOfLicense = this.id;
        price.innerHTML = priceOfLicense*numberOfLicenses;
        });

        $("#number_of_licenses").change(function() {
            numberOfLicenses = ($(this).val());
            price.innerHTML = priceOfLicense*numberOfLicenses;
        });

        $('input[type="radio"]').on('click change', function(){
            plan.innerHTML  = '#' + $(this).attr('value');    
        });

});



    
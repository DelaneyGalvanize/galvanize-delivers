$(document).ready(function() {

    var subtotes = 0

    function almostTotal() {
        var realVal = Number(($(event.target).parent().parent().find('p').text().replace(/[^0-9\.]+/g, "")))
        var subTotal = subtotes += realVal
        console.log(subTotal)
        return subTotal.toFixed(2)
    }
    $('.addItem').click(function() {
        var row = $('<tr>')
        var item = $('<td class="left-align">' + $(event.target).parent().parent().find('.card-title').text() + '</td>')
        var price = $('<td class="right-align">' + $(event.target).parent().parent().find('p').text() + '</td>')
        row.append(item)
        row.append(price)
        $('tbody').append(row)
        var subtotalValue = $('#subtotal').text(almostTotal())
        var taxValue = $('#tax').text(((almostTotal() * 0.04).toFixed(2)))
        var totalValue = (parseInt(subtotalValue.text()) + parseInt(taxValue.text()))
        $("#total").text(totalValue)
    })

    //toast
    $('#placeOrder').click(function() {
        // console.log('clicked')
        var nameInput = $('#name').val()
        // console.log(nameInput);
        var numberInput = $('#phone_number').val()
        var addressInput = $('#address').val()

        if (subTotes.length > 0 && nameInput.length > 0 && addressInput.length > 0 && numberInput.length > 0) {
            alert('Woo Hoo Fiesta Time! Your order is being processed')
        } else {
            alert('Ay yi yi.Your order cannot be complete. Please fill in the information correctly.')
            event.preventDefault()
        }

    })

});

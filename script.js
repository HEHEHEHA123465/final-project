let plus1_1 = document.getElementById('plus1_1');
let minus1_1 = document.getElementById('minus1_1');
let amount1_1 = document.getElementById('amount1_1');
let count1_1 = 0;

let plus1_2 = document.getElementById('plus1_2');
let minus1_2 = document.getElementById('minus1_2');
let amount1_2 = document.getElementById('amount1_2');
let count1_2 = 0;

let plus1_3 = document.getElementById('plus1_3');
let minus1_3 = document.getElementById('minus1_3');
let amount1_3 = document.getElementById('amount1_3');
let count1_3 = 0;

let plus1_4 = document.getElementById('plus1_4');
let minus1_4 = document.getElementById('minus1_4');
let amount1_4 = document.getElementById('amount1_4');
let count1_4 = 0;

let plus2_1 = document.getElementById('plus2_1');
let minus2_1 = document.getElementById('minus2_1');
let amount2_1 = document.getElementById('amount2_1');
let count2_1 = 0;

let plus2_2 = document.getElementById('plus2_2');
let minus2_2 = document.getElementById('minus2_2');
let amount2_2 = document.getElementById('amount2_2');
let count2_2 = 0;

let plus2_3 = document.getElementById('plus2_3');
let minus2_3 = document.getElementById('minus2_3');
let amount2_3 = document.getElementById('amount2_3');
let count2_3 = 0;

let plus2_4 = document.getElementById('plus2_4');
let minus2_4 = document.getElementById('minus2_4');
let amount2_4 = document.getElementById('amount2_4');
let count2_4 = 0;

let plus3_1 = document.getElementById('plus3_1');
let minus3_1 = document.getElementById('minus3_1');
let amount3_1 = document.getElementById('amount3_1');
let count3_1 = 0;

let plus3_2 = document.getElementById('plus3_2');
let minus3_2 = document.getElementById('minus3_2');
let amount3_2 = document.getElementById('amount3_2');
let count3_2 = 0;

let plus3_3 = document.getElementById('plus3_3');
let minus3_3 = document.getElementById('minus3_3');
let amount3_3 = document.getElementById('amount3_3');
let count3_3 = 0;

let plus3_4 = document.getElementById('plus3_4');
let minus3_4 = document.getElementById('minus3_4');
let amount3_4 = document.getElementById('amount3_4');
let count3_4 = 0;

let plus4_1 = document.getElementById('plus4_1');
let minus4_1 = document.getElementById('minus4_1');
let amount4_1 = document.getElementById('amount4_1');
let count4_1 = 0;

let plus4_2 = document.getElementById('plus4_2');
let minus4_2 = document.getElementById('minus4_2');
let amount4_2 = document.getElementById('amount4_2');
let count4_2 = 0;

let plus4_3 = document.getElementById('plus4_3');
let minus4_3 = document.getElementById('minus4_3');
let amount4_3 = document.getElementById('amount4_3');
let count4_3 = 0;

let plus4_4 = document.getElementById('plus4_4');
let minus4_4 = document.getElementById('minus4_4');
let amount4_4 = document.getElementById('amount4_4');
let count4_4 = 0;

function updateDisplay() {
    amount1_1.textContent = count1_1;
    amount1_2.textContent = count1_2;
    amount1_3.textContent = count1_3;
    amount1_4.textContent = count1_4;
    amount2_1.textContent = count2_1;
    amount2_2.textContent = count2_2;
    amount2_3.textContent = count2_3;
    amount2_4.textContent = count2_4;
    amount3_1.textContent = count3_1;
    amount3_2.textContent = count3_2;
    amount3_3.textContent = count3_3;
    amount3_4.textContent = count3_4;
    amount4_1.textContent = count4_1;
    amount4_2.textContent = count4_2;
    amount4_3.textContent = count4_3;
    amount4_4.textContent = count4_4;
    updateDisplaycount()
}

function setupCounter1_1() {
    plus1_1.addEventListener('click', () => {
        count1_1++;
        updateDisplay();
    });

    minus1_1.addEventListener('click', () => {
        if (count1_1 > 0) {
            count1_1--;
            updateDisplay();
        }
    });
}

function setupCounter1_2() {
    plus1_2.addEventListener('click', () => {
        count1_2++;
        updateDisplay();
    });

    minus1_2.addEventListener('click', () => {
        if (count1_2 > 0) {
            count1_2--;
            updateDisplay();
        }
    });
}

function setupCounter1_3() {
    plus1_3.addEventListener('click', () => {
        count1_3++;
        updateDisplay();
    });

    minus1_3.addEventListener('click', () => {
        if (count1_3 > 0) {
            count1_3--;
            updateDisplay();
        }
    });
}

function setupCounter1_4() {
    plus1_4.addEventListener('click', () => {
        count1_4++;
        updateDisplay();
    });

    minus1_4.addEventListener('click', () => {
        if (count1_4 > 0) {
            count1_4--;
            updateDisplay();
        }
    });
}

function setupCounter2_1() {
    plus2_1.addEventListener('click', () => {
        count2_1++;
        updateDisplay();
    });

    minus2_1.addEventListener('click', () => {
        if (count2_1 > 0) {
            count2_1--;
            updateDisplay();
        }
    });
}

function setupCounter2_2() {
    plus2_2.addEventListener('click', () => {
        count2_2++;
        updateDisplay();
    });

    minus2_2.addEventListener('click', () => {
        if (count2_2 > 0) {
            count2_2--;
            updateDisplay();
        }
    });
}

function setupCounter2_3() {
    plus2_3.addEventListener('click', () => {
        count2_3++;
        updateDisplay();
    });

    minus2_3.addEventListener('click', () => {
        if (count2_3 > 0) {
            count2_3--;
            updateDisplay();
        }
    });
}

function setupCounter2_4() {
    plus2_4.addEventListener('click', () => {
        count2_4++;
        updateDisplay();
    });

    minus2_4.addEventListener('click', () => {
        if (count2_4 > 0) {
            count2_4--;
            updateDisplay();
        }
    });
}

function setupCounter3_1() {
    plus3_1.addEventListener('click', () => {
        count3_1++;
        updateDisplay();
    });

    minus3_1.addEventListener('click', () => {
        if (count3_1 > 0) {
            count3_1--;
            updateDisplay();
        }
    });
}

function setupCounter3_2() {
    plus3_2.addEventListener('click', () => {
        count3_2++;
        updateDisplay();
    });

    minus3_2.addEventListener('click', () => {
        if (count3_2 > 0) {
            count3_2--;
            updateDisplay();
        }
    });
}

function setupCounter3_3() {
    plus3_3.addEventListener('click', () => {
        count3_3++;
        updateDisplay();
    });

    minus3_3.addEventListener('click', () => {
        if (count3_3 > 0) {
            count3_3--;
            updateDisplay();
        }
    });
}

function setupCounter3_4() {
    plus3_4.addEventListener('click', () => {
        count3_4++;
        updateDisplay();
    });

    minus3_4.addEventListener('click', () => {
        if (count3_4 > 0) {
            count3_4--;
            updateDisplay();
        }
    });
}

function setupCounter4_1() {
    plus4_1.addEventListener('click', () => {
        count4_1++;
        updateDisplay();
    });

    minus4_1.addEventListener('click', () => {
        if (count4_1 > 0) {
            count4_1--;
            updateDisplay();
        }
    });
}

function setupCounter4_2() {
    plus4_2.addEventListener('click', () => {
        count4_2++;
        updateDisplay();
    });

    minus4_2.addEventListener('click', () => {
        if (count4_2 > 0) {
            count4_2--;
            updateDisplay();
        }
    });
}

function setupCounter4_3() {
    plus4_3.addEventListener('click', () => {
        count4_3++;
        updateDisplay();
    });

    minus4_3.addEventListener('click', () => {
        if (count4_3 > 0) {
            count4_3--;
            updateDisplay();
        }
    });
}

function setupCounter4_4() {
    plus4_4.addEventListener('click', () => {
        count4_4++;
        updateDisplay();
    });

    minus4_4.addEventListener('click', () => {
        if (count4_4 > 0) {
            count4_4--;
            updateDisplay();
        }
    });
}

setupCounter1_1();
setupCounter1_2();
setupCounter1_3();
setupCounter1_4();

setupCounter2_1();
setupCounter2_2();
setupCounter2_3();
setupCounter2_4();

setupCounter3_1();
setupCounter3_2();
setupCounter3_3();
setupCounter3_4();

setupCounter4_1();
setupCounter4_2();
setupCounter4_3();
setupCounter4_4();

let zindex5 = document.querySelector('.zindex5')
let zindex1 = document.querySelector('.zindex1')
let zindex2 = document.querySelector('.zindex2')
let zindex3 = document.querySelector('.zindex3')
let zindex4 = document.querySelector('.zindex4')
let confirmbtn = document.querySelector('#confirm')

function zindex5function() {
    zindex5.style.display = 'flex'
    zindex5.style.flexDirection = 'column'
    zindex1.style.display = 'none'
    zindex2.style.display = 'none'
    zindex3.style.display = 'none'
    zindex4.style.display = 'none'
    // cart.style.display= ' block'
    
}
function zindex1function() {
    zindex1.style.display = 'flex'
    zindex1.style.flexDirection = 'column'
    confirmbtn.style.transform = 'translate(20vw, 1850px)'
    zindex5.style.display = 'none'
    zindex2.style.display = 'none'
    zindex3.style.display = 'none'
    zindex4.style.display = 'none'
    cart.style.display= 'none'
}
function zindex4function() {
    zindex4.style.display = 'flex'
    zindex4.style.flexDirection = 'column'
    confirmbtn.style.transform = 'translate(20vw, 1850px)'
    zindex5.style.display = 'none'
    zindex2.style.display = 'none'
    zindex3.style.display = 'none'
    zindex1.style.display = 'none'
    cart.style.display= 'none'
}
function zindex3function() {
    zindex3.style.display = 'flex'
    zindex3.style.flexDirection = 'column' 
    confirmbtn.style.transform = 'translate(70px, 1900px)'
    zindex5.style.display = 'none'
    zindex2.style.display = 'none'
    zindex4.style.display = 'none'
    zindex1.style.display = 'none'
    cart.style.display= 'none'
}
function zindex2function() {
    zindex2.style.display = 'flex'
    zindex2.style.flexDirection = 'column'
    confirmbtn.style.transform = 'translate(20vw, 1850px)'
    zindex5.style.display = 'none'
    zindex4.style.display = 'none'
    zindex3.style.display = 'none'
    zindex1.style.display = 'none'
    cart.style.display= 'none'
}

let addtocart1_1 = document.querySelector('.addtocart1_1')
let addtocart1_2 = document.querySelector('.addtocart1_2')
let addtocart1_3 = document.querySelector('.addtocart1_3')
let addtocart1_4 = document.querySelector('.addtocart1_4')

let addtocart2_1 = document.querySelector('.addtocart2_1')
let addtocart2_2 = document.querySelector('.addtocart2_2')
let addtocart2_3 = document.querySelector('.addtocart2_3')
let addtocart2_4 = document.querySelector('.addtocart2_4')

let addtocart3_1 = document.querySelector('.addtocart3_1')
let addtocart3_2 = document.querySelector('.addtocart3_2')
let addtocart3_3 = document.querySelector('.addtocart3_3')
let addtocart3_4 = document.querySelector('.addtocart3_4')

let addtocart4_1 = document.querySelector('.addtocart4_1')
let addtocart4_2 = document.querySelector('.addtocart4_2')
let addtocart4_3 = document.querySelector('.addtocart4_3')
let addtocart4_4 = document.querySelector('.addtocart4_4')

function nodisplayonclick(button, count) {
    button.addEventListener('click', () => {
        button.style.display = 'none'
        count++;
        updateDisplay();
    })
}

nodisplayonclick(addtocart1_1, count1_1)
nodisplayonclick(addtocart1_2, count1_2)
nodisplayonclick(addtocart1_3, count1_3)
nodisplayonclick(addtocart1_4, count1_4)

nodisplayonclick(addtocart2_1, count2_1)
nodisplayonclick(addtocart2_2, count2_2)
nodisplayonclick(addtocart2_3, count2_3)
nodisplayonclick(addtocart2_4, count2_4)

nodisplayonclick(addtocart3_1, count3_1)
nodisplayonclick(addtocart3_2, count3_2)
nodisplayonclick(addtocart3_3, count3_3)
nodisplayonclick(addtocart3_4, count3_4)

nodisplayonclick(addtocart4_1, count4_1)
nodisplayonclick(addtocart4_2, count4_2)
nodisplayonclick(addtocart4_3, count4_3)
nodisplayonclick(addtocart4_4, count4_4)

let amountcart1_1 = document.getElementById('amount1')
let amountcart1_2 = document.getElementById('amount2')
let amountcart1_3 = document.getElementById('amount3')
let amountcart1_4 = document.getElementById('amount4')

let amountcart2_1 = document.getElementById('amount5')
let amountcart2_2 = document.getElementById('amount6')
let amountcart2_3 = document.getElementById('amount7')
let amountcart2_4 = document.getElementById('amount8')

let amountcart3_1 = document.getElementById('amount9')
let amountcart3_2 = document.getElementById('amount10')
let amountcart3_3 = document.getElementById('amount11')
let amountcart3_4 = document.getElementById('amount12')

let amountcart4_1 = document.getElementById('amount13')
let amountcart4_2 = document.getElementById('amount14')
let amountcart4_3 = document.getElementById('amount15')
let amountcart4_4 = document.getElementById('amount16')


let order1_1 = document.querySelector('#item1')
let order1_2 = document.querySelector('#item2')
let order1_3 = document.querySelector('#item3')
let order1_4 = document.querySelector('#item4')

let order2_1 = document.querySelector('#item5')
let order2_2 = document.querySelector('#item6')
let order2_3 = document.querySelector('#item7')
let order2_4 = document.querySelector('#item8')

let order3_1 = document.querySelector('#item9')
let order3_2 = document.querySelector('#item10')
let order3_3 = document.querySelector('#item11')
let order3_4 = document.querySelector('#item12')

let order4_1 = document.querySelector('#item13')
let order4_2 = document.querySelector('#item14')
let order4_3 = document.querySelector('#item15')
let order4_4 = document.querySelector('#item16')

let hr1_1 = document.querySelector('#hr1');
let hr1_2 = document.querySelector('#hr2');
let hr1_3 = document.querySelector('#hr3');
let hr1_4 = document.querySelector('#hr4');

let hr2_1 = document.querySelector('#hr5');
let hr2_2 = document.querySelector('#hr6');
let hr2_3 = document.querySelector('#hr7');
let hr2_4 = document.querySelector('#hr8');

let hr3_1 = document.querySelector('#hr9');
let hr3_2 = document.querySelector('#hr10');
let hr3_3 = document.querySelector('#hr11');
let hr3_4 = document.querySelector('#hr12');

let hr4_1 = document.querySelector('#hr13');
let hr4_2 = document.querySelector('#hr14');
let hr4_3 = document.querySelector('#hr15');
let hr4_4 = document.querySelector('#hr16');

function updateDisplayCart() {
    amountcart1_1.textContent = count1_1;
    amountcart1_2.textContent = count1_2;
    amountcart1_3.textContent = count1_3;
    amountcart1_4.textContent = count1_4;
    amountcart2_1.textContent = count2_1;
    amountcart2_2.textContent = count2_2;
    amountcart2_3.textContent = count2_3;
    amountcart2_4.textContent = count2_4;
    amountcart3_1.textContent = count3_1;
    amountcart3_2.textContent = count3_2;
    amountcart3_3.textContent = count3_3;
    amountcart3_4.textContent = count3_4;
    amountcart4_1.textContent = count4_1;
    amountcart4_2.textContent = count4_2;
    amountcart4_3.textContent = count4_3;
    amountcart4_4.textContent = count4_4;
    nodisplay(amountcart1_1, order1_1, hr1_1);
    nodisplay(amountcart1_2, order1_2, hr1_2);
    nodisplay(amountcart1_3, order1_3, hr1_3);
    nodisplay(amountcart1_4, order1_4, hr1_4);
    nodisplay(amountcart2_1, order2_1, hr2_1);
    nodisplay(amountcart2_2, order2_2, hr2_2);
    nodisplay(amountcart2_3, order2_3, hr2_3);
    nodisplay(amountcart2_4, order2_4, hr2_4);
    nodisplay(amountcart3_1, order3_1, hr3_1);
    nodisplay(amountcart3_2, order3_2, hr3_2);
    nodisplay(amountcart3_3, order3_3, hr3_3);
    nodisplay(amountcart3_4, order3_4, hr3_4);
    nodisplay(amountcart4_1, order4_1, hr4_1);
    nodisplay(amountcart4_2, order4_2, hr4_2);
    nodisplay(amountcart4_3, order4_3, hr4_3);
    nodisplay(amountcart4_4, order4_4, hr4_4);
    updateDisplaycount()
}
function updateDisplaycount() {
cartamount.textContent =
    Number(amountcart1_1.textContent) + Number(amountcart1_2.textContent) + Number(amountcart1_3.textContent) + Number(amountcart1_4.textContent) +
    Number(amountcart2_1.textContent) + Number(amountcart2_2.textContent) + Number(amountcart2_3.textContent) + Number(amountcart2_4.textContent) +
    Number(amountcart3_1.textContent) + Number(amountcart3_2.textContent) + Number(amountcart3_3.textContent) + Number(amountcart3_4.textContent) +
    Number(amountcart4_1.textContent) + Number(amountcart4_2.textContent) + Number(amountcart4_3.textContent) + Number(amountcart4_4.textContent);

 
}
let cartamount = document.querySelector('#cartamount')
let cart = document.querySelector('.cart')
let emptycart = document.querySelector('#emptycart')
function cartdisplay() {
    if (cartamount.textContent == 0) {
        emptycart.style.display = 'block'
        cart.style.display = 'none'
    } else {
        cart.style.display = 'block'
    }
}
updateDisplayCart();
function nocartdisplay() {       
    emptycart.style.display = 'none'
        cart.style.display = 'none'

}
function del1_1() { 
    amountcart1_1.textContent = 0; 
    order1_1.style.display = 'none'
    hr1_1.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}
function del1_2() { 
    amountcart1_2.textContent = 0; 
    order1_2.style.display = 'none'
    hr1_2.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}
function del1_3() { 
    amountcart1_3.textContent = 0; 
    updateDisplayCart(); 
    order1_3.style.display = 'none'
    hr1_3.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}
function del1_4() { 
    amountcart1_4.textContent = 0; 
    order1_4.style.display = 'none'
    hr1_4.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}

function del2_1() { 
    amountcart2_1.textContent = 0; 
    order2_1.style.display = 'none'
    hr2_1.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}
function del2_2() { 
    amountcart2_2.textContent = 0; 
    order2_2.style.display = 'none'
    hr2_2.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}
function del2_3() { 
    amountcart2_3.textContent = 0; 
    order2_2.style.display = 'none'
    hr2_2.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}
function del2_4() { 
    amountcart2_4.textContent = 0; 
    order2_4.style.display = 'none'
    hr2_4.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}

function del3_1() { 
    amountcart3_1.textContent = 0; 
    order3_1.style.display = 'none'
    hr3_1.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}
function del3_2() { 
    amountcart3_2.textContent = 0; 
    updateDisplayCart(); 
    order3_2.style.display = 'none'
    hr3_2.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}
function del3_3() { 
    amountcart3_3.textContent = 0; 
    order3_3.style.display = 'none'
    hr3_3.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}
function del3_4() { 
    amountcart3_4.textContent = 0; 
    order3_4.style.display = 'none'
    hr3_4.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}

function del4_1() { 
    amountcart4_1.textContent = 0; 
    order4_1.style.display = 'none'
    hr4_1.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}
function del4_2() { 
    amountcart4_2.textContent = 0; 
    order4_2.style.display = 'none'
    hr4_2.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}
function del4_3() { 
    amountcart4_3.textContent = 0; 
    order4_3.style.display = 'none'
    hr4_3.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}
function del4_4() { 
    amountcart4_4.textContent = 0; 
    order4_4.style.display = 'none'
    hr4_4.style.display = 'none'
    updateDisplay()
    updateDisplaycount()
    cartdisplay()
}


function nodisplay(amount, order, hr) {
    let amountValue = amount.textContent.trim();
    let amountNumber = Number(amountValue);

    if (amountNumber === 0) {
        order.style.display = 'none';
        hr.style.display = 'none';
    } else {
        order.style.display = 'flex';
        hr.style.display = 'flex';
    }
}
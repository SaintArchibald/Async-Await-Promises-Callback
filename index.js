let stocks = {
    fruits: ["Strawberry","Grapes","Banana","Mango","cherry","watermelon"],
    liquid: ['Water','and','Ice'],
    holder: ["Cone","Cup","Sticks","Square"],
    toppinps: ["Sprinkles","Peanut Butter","Chocolate","Pretzels","Marshmallows","Sour Watermelon","Coconut Flakes","Pop-Tart","Oreos","Raisins","waffers","Honey","Caramel","Gummy Bears","Cake"]
}

let CustomerOrder = {
    pickedFruit: stocks.fruits[0],
    pickedLiquids: stocks.liquid,
    pickedHolder: stocks.holder[0],
    pickedTopping: stocks.toppinps[0]
}


let order = (call_production) => {

    setTimeout(() => {
        console. log("Customer has submitted their order. It follows...")
         setTimeout(() => {
            console. log(`${CustomerOrder.pickedFruit} was selected.`)
            console. log(`${CustomerOrder.pickedLiquids} is neccessary.`)
            console. log(`${CustomerOrder.pickedHolder} was selected.`)
            console. log(`${CustomerOrder.pickedTopping} was selected.`)

            call_production()
        },2000)
    },000)
}

let production = () => {

        setTimeout(() => {
            console. log("Customer Order has been proccessed, production has started.")
        
            setTimeout(() => {
                console. log(`The ${CustomerOrder.pickedFruit} has been chopped.`)
            
                setTimeout(() => {
                    console. log(`${CustomerOrder.pickedLiquids} was added.`)
                
                    setTimeout(() => {
                        console. log('The machine has blended the Ingredients.')
                    
                        setTimeout(() => {
                            console. log(`The Ice Cream has been placed in the ${CustomerOrder.pickedHolder}.`)
                       
                            setTimeout(() => {
                                console. log(`${CustomerOrder.pickedTopping} was added.`)
                            
                                setTimeout(() => {
                                    console. log("Order has been filled and handed to customer. Have a great day! Next")
                                },2000)
                            },3000)
                        },2000)
                    },1000)
                },1000)
            },2000)
        },0000)
}

order(production)
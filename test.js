let data = [{
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
];


function interestCalculator(arr) {
    let rate;
    let interest;
    let interestData = [];


    for (let i = 0; i < arr.length; i++) {
        let prin = arr[i].principal;
        let t = arr[i].time;
        if (prin >= 2500 && t > 1 && t < 3) {
            rate = 3;
        } else if (prin >= 2500 && t >= 3) {
            rate = 4;
        } else if (prin < 2500 || t <= 1) {
            rate = 2;
        } else {
            rate = 1;
        }
        interest = (prin * rate * t) / 100;


        let newObj = {
            principal: prin,
            rate: rate,
            time: t,
            interest: interest
        }

        interestData.push(newObj);
    }
    console.log(interestData);
    return interestData;
}

interestCalculator(data);
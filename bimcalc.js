

function calculator() {
    let height = document.getElementById("inputHeight").value;
    let weight = document.getElementById("inputweight").value;
    let heightval = height.trim();
    let weightval = weight.trim();

    let heightinM = (heightval / 100) * (heightval / 100);
    let bmi = (weightval / heightinM).toFixed();


    if (bmi < 18) {
        document.getElementById("result").innerHTML = `Your BMI is ${bmi}.Your are underWeight.`
    }
    else if (bmi > 18 && bmi < 25) {
        document.getElementById("result").innerHTML = `Your BMI is ${bmi}.Your are NormalWeight.`
    }
    else if (bmi > 25 && bmi < 30) {
        document.getElementById("result").innerHTML = `Your BMI is ${bmi}.Your are Pre-obesity.`
    }
    else if (bmi > 30 && bmi < 35) {
        document.getElementById("result").innerHTML = `Your BMI is ${bmi}.Your are obesity class-1.`
    }
    else if (bmi > 35 && bmi < 40) {
        document.getElementById("result").innerHTML = `Your BMI is ${bmi}.Your are obesity class-2.`
    }
    else {
        document.getElementById("result").innerHTML = `Your BMI is ${bmi}.Your are obesity class-3.`
    }

}

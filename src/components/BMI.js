import '../styles/bmi.css'
import bmiChart from '../images/bmiChart.jpg'
export default function BMI(){
    function heightIncrement(){
        document.getElementById("height").value++
    }
    function heightDecrement(){
        document.getElementById("height").value--
    }
    function weightIncrement(){
        document.getElementById("weight").value++
    }
    function weightDecrement(){
        document.getElementById("weight").value--
    }
    function check1(e){
        if(isNaN(e.target.value)){
            alert("Enter only integer values.")
            reset()
        }
    }
    function check2(e){
        if(isNaN(e.target.value)){
            alert("Enter only integer values.")
            reset()
        }
    }
    function calculate()
    {
        var x=document.getElementById("height").value/100
        var y=document.getElementById("weight").value
        var bmi=y/(x**2)
        document.getElementById("bmi").value=bmi
    }
    function reset(){
        document.getElementById("height").value=""
        document.getElementById("weight").value=""
        document.getElementById("bmi").value=""
    }
    return(
        <>
        <div class="container-fluid bg-light">
        <div class="row">
            <div class="col-md-12 text-center bg-success-subtle p-3">
                <h3 className='heading'>Calculate your BMI (Body Mass Index)</h3>
            </div>
        </div>
        <div class="row mt-2">
            <diV class="col-md-2">

            </diV>
            <div class="col-md-2">
                <b>Height</b>
            </div>
            <div class="col-md-4">
                <input id="height" class="form-control" type="text" placeholder="Enter your Height(cm)" onChange={check1}/>
            </div>
            <div class="col-md-1">
                <svg onClick={heightIncrement} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                  </svg>
            </div>
            <div class="col-md-1">
                  <svg onClick={heightDecrement} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                  </svg>
            </div>
            <div class="col-md-2">

            </div>
        </div>
        <div class="row mt-2">
            <diV class="col-md-2">

            </diV>
            <div class="col-md-2">
                <b>Weight</b>
            </div>
            <div class="col-md-4">
                <input id="weight" class="form-control" type="text" placeholder="Enter your Weight(kg)" onChange={check2}/>
            </div>
            <div class="col-md-1">
                <svg onClick={weightIncrement} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                  </svg>
            </div>
            <div class="col-md-1">
                  <svg onClick={weightDecrement} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                  </svg>
            </div>
            <div class="col-md-2">

            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <button class="btn btn-outline-danger" onClick={calculate}>Calculate</button>
                <button class="btn btn-outline-danger" onClick={reset}>Reset values</button>
            </div>
            <div class="col-md-4"></div>
        </div>

        <div class="row mt-2">
            <diV class="col-md-2">

            </diV>
            <div class="col-md-2">
                <b>Your BMI</b>
            </div>
            <div class="col-md-4">
                <input id="bmi" type="text" class="form-control"/>
            </div>
            <div class="col-md-4">

            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Category</th>
                        <th scope="col">BMI (kg/m2)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="table-primary">
                        <th scope="row">Underweight (Severe thinness)</th>
                        <td>16.0</td>
                      </tr>
                      <tr class="table-secondary">
                        <th scope="row">Underweight (Moderate thinness)</th>
                        <td>16.0 – 16.9</td>
                      </tr>
                      <tr class="table-success">
                        <th scope="row">Underweight (Mild thinness)</th>
                        <td>17.0 – 18.4</td>
                      </tr>
                      <tr  class="table-danger">
                        <th scope="row">Normal range</th>
                        <td>18.5 – 24.9</td>
                      </tr>
                      <tr  class="table-warning">
                        <th scope="row">Overweight (Pre-obese)</th>
                        <td>25.0 – 29.9</td>
                      </tr>
                      <tr  class="table-info">
                        <th scope="row">Obese (Class I)</th>
                        <td>30.0 – 34.9</td>
                      </tr>
                      <tr  class="table-light">
                        <th scope="row">Obese (Class II)</th>
                        <td>35.0 – 39.9</td>
                      </tr>
                      <tr class="table-dark">
                        <th scope="row">Obese (Class III)</th>
                        <td>≥ 40.0</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <img src={bmiChart} class="img-fluid"/>
            </div>
        </div>
    </div>
        </>
    );
}
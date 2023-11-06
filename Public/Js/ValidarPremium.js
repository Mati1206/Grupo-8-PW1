
const btnAvanzar = document.querySelector('btn_Elegir_Plan');
const planElegido= document.getElementById('planes_disponibles');



let validarPlanElegido = () =>{
    function recolectarDatos(){
        let plan_individual = document.getElementById("plan_individual");
        let plan_duo = document.getElementById("plan_duo");
        let plan_familiar = document.getElementById("plan_familiar");
    
        let planElegido = '';
        if(plan_individual.checked){
            planElegido = plan_individual.value;
        }else{
            if(plan_duo.checked){
                planElegido = plan_duo.value;
            }else{
                planElegido= plan_familiar.value
            }
        }
        let mensajeFinal = "elegiste el plan" + planElegido ;
    
    }
}


btnAvanzar.addEventListener('click',validarPlanElegido);
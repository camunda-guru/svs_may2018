import {Policy} from './Policy';
import {Vehicle} from './vehicle';

class VehicleInsurancePolicy extends Policy
{
    private vehicle:Vehicle;

    get GVehicle():Vehicle{
        return this.vehicle;
    }
    set GVehicle(value:Vehicle)
    {
        this.vehicle=value;
    }

}

var obj = new VehicleInsurancePolicy();
obj.PolicyNumber=2385648;
obj.PolicyName="Vehicle Insurance";
obj.ActivationDate=new Date(2018,1,1);
obj.MaturityDate=new Date(2022,1,1);
obj.InsuredAmount=35000;
obj.PremiumMode=12;
var vehicle=new Vehicle("TN-02-0604","Light Weight","Petrol");
obj.GVehicle=vehicle;
console.log(obj.PolicyNumber,"-->",obj.GVehicle.RegNo);


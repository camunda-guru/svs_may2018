export class Policy
{
   private policyNumber:number;
   private policyName:string;
   private activationDate:Date;
   private maturityDate:Date;
   private insuredAmount:number;
   private premiumMode:number;

   get PolicyNumber():number
   {
          return this.policyNumber;
   }

   set PolicyNumber(value:number)
   {
       this.policyNumber=value;

   }


   get PolicyName():string
   {
       return this.policyName;
   }
     
   set PolicyName(value:string){
       this.policyName=value;
   }

    get ActivationDate():Date
    {
        return this.activationDate;
    }

    set ActivationDate(value:Date)
    {
        this.activationDate=value;
    }


    get MaturityDate():Date
    {
        return this.maturityDate;
    }

    set MaturityDate(value:Date)
    {
        this.maturityDate=value;
    }

     get InsuredAmount():number
     {
         return this.insuredAmount;
     }

     set InsuredAmount(value:number)
     {
         this.insuredAmount=value;
     }

     get PremiumMode():number
     {
         return this.PremiumMode;
     }

     set PremiumMode(value:number)
     {
         this.premiumMode=value;
     }
}

/*
var policy=new Policy();
policy.PolicyNumber=427654;
policy.PolicyName="Life Insurance";
policy.ActivationDate=new Date(2018,1,1);
policy.MaturityDate=new Date(2022,1,1);
policy.InsuredAmount=5000000;
policy.PremiumMode=3;
console.log("Policy Details.....");
console.log(policy.PolicyNumber,"-->",policy.PolicyName,"",policy.ActivationDate.getDate());
*/
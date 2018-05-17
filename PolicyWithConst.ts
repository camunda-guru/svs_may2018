class CPolicy
{
   private policyNumber:number;
   private policyName:string;
   private activationDate:Date;
   private maturityDate:Date;
   private insuredAmount:number;
   private premiumMode:number;

   constructor(pno:number,name:string,aDate:Date,mDate:Date,amt:number,pMode:number)
   {
       this.policyNumber=pno;
       this.policyName=name;
       this.activationDate=aDate;
       this.maturityDate=mDate;
       this.insuredAmount=amt;
       this.premiumMode=pMode;
   }

   get PolicyNumber():number
   {
          return this.policyNumber;
   }

   
   get PolicyName():string
   {
       return this.policyName;
   }
     
   
    get ActivationDate():Date
    {
        return this.activationDate;
    }

   

    get MaturityDate():Date
    {
        return this.maturityDate;
    }

    

     get InsuredAmount():number
     {
         return this.insuredAmount;
     }

   
     get PremiumMode():number
     {
         return this.PremiumMode;
     }

   
}


var policyObj=new CPolicy(23123,"General Insurance",new Date(2018,1,1),new Date(2022,1,1),200000,3);

console.log("Policy Details.....");
console.log(policyObj.PolicyNumber,"-->",policyObj.PolicyName,"",policyObj.ActivationDate.getDate());
package com.cuboulder.zcontrollers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cuboulder.uentities.KidInfo;
import com.cuboulder.uentities.Nutrition;

@RestController
public class FormController {
	
	Nutrition nu;
	 float carb=0.0f;
	 float protein=0.0f;
	 float fat=0.0f;
	 float VA=0.0f;
	 float VB=0.0f;
	 float VC=0.0f;
	 float VD=0.0f;
	 float VE=0.0f;
	
	@RequestMapping("/nutrition")
	public Nutrition getReqNutrition() {
		
		return nu;
		//return new Nutrition("1","2","3","4","5","6","7","8");
		
	}
	
	
	@RequestMapping("/recipie")
	public Nutrition getReceipieNutrition(@RequestParam(value="recipie") String recipie,
            @RequestParam(value="quantity") String quantity) {
		 
		int qty=Integer.parseInt(quantity);
	      
		
		
		if(recipie.equals("apple")) {
			
			carb=carb+5*qty;
			protein=protein+0.8f*qty;
			fat=fat+1*qty;
			VA=VA+100*qty;
			VB=VB+3*qty;
			VC=VC+3*qty;
			VD=VD+0.1f*qty;
			VE=VE+2*qty;
					
			
			
		}
		
      if(recipie.equals("cerelac")) {
			
    	  carb=carb+6*qty;
    	  protein=protein+1.2f*qty;
    	  fat=fat+2*qty;
    	  VA=VA+120*qty;
    	  VB=VB+3*qty;
    	  VC=VC+3*qty;
    	  VD=VD+0.2f*qty;
    	  VE=VE+3*qty;
					
			
			
		}
      
      if(recipie.equals("curd")) {
			
    	  carb=carb+4*qty;
    	  protein=protein+1.2f*qty;
    	  fat=fat+3*qty;
    	  VA=VA+90*qty;
    	  VB=VB+2*qty;
    	  VC=VC+2*qty;
    	  VD=VD+0.2f*qty;
    	  VE=VE+2*qty;
					
			
			
		}
      if(recipie.equals("cookie")) {
			
    	  carb=carb+5*qty;
    	  protein=protein+1.2f*qty;
    	  fat=fat+4*qty;
    	  VA=VA+80*qty;
    	  VB=VB+2*qty;
    	  VC=VC+2*qty;
    	  VD=VD+0.2f*qty;
    	  VE=VE+3*qty;
					
			
			
		}
      if(recipie.equals("rice")) {
			
    	  carb=carb+10*qty;
    	  protein=protein+1.0f*qty;
    	  fat=fat+2*qty;
    	  VA=VA+110*qty;
    	  VB=VB+3*qty;
    	  VC=VC+3*qty;
    	  VD=VD+0.3f*qty;
    	  VE=VE+2*qty;
					
			
			
		}
		
     
//      carb=carb*qty*qty;
//		protein=protein*qty;
//		fat=fat*qty;
//		VA=VA*qty;
//		VB=VB*qty;
//		VC=VC*qt
//		VE=VE*qty;
//		y;
//		VD=VD*qty;
		
		Nutrition nu = new Nutrition(String.valueOf(carb),String.valueOf(protein),String.valueOf(fat),String.valueOf(VA),String.valueOf(VB),String.valueOf(VC),String.valueOf(VD),String.valueOf(VE));
		
		return nu;
		
		
		
	}

	
	@PostMapping(path = "/nutrition", consumes = "application/json", produces = "application/json")
	public void addMember(@RequestBody KidInfo kidInfo) {
	    //code
		
		if(kidInfo.age < 1) {
			nu = new Nutrition("20","3","6","300","15","15","0.5","6");
		}
		if(kidInfo.age > 1 && kidInfo.age < 3) {
			nu = new Nutrition("145","13","56","300","15","15","0.5","6");
		}
		
	}
	
}

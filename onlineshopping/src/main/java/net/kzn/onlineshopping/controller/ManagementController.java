package net.kzn.onlineshopping.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import net.kzn.shoppingbackend.dao.CategoryDAO;
import net.kzn.shoppingbackend.dao.ProductDAO;
import net.kzn.shoppingbackend.dto.Category;
import net.kzn.shoppingbackend.dto.Product;

@Controller
@RequestMapping("/manage")
public class ManagementController {
	
	@Autowired
	
	private CategoryDAO categoryDAO;
	
@Autowired
	
	private ProductDAO productDAO;

private static final Logger logger = LoggerFactory.getLogger(ManagementController.class);
	@RequestMapping(value = "/products", method=RequestMethod.GET)
	public ModelAndView showMangeProducts(@RequestParam(name="operation",required=false) String operation) {		

		ModelAndView mv = new ModelAndView("page");	
		mv.addObject("title","Product Management");		
		mv.addObject("userClickManageProduct",true);
		
		Product nProduct = new Product();
		
		nProduct.setSupplierId(1);
		nProduct.setActive(true);
		
		mv.addObject("product",nProduct);
		
		if(operation!=null) {
			if(operation.equals("product")) {
				mv.addObject("message","product Submited succefully!");
			}
		}
		
		return mv;
		}
	
	@RequestMapping(value = "/products", method=RequestMethod.POST)
	public String handleProductSubmission(@ModelAttribute("product") Product mProduct) {
		
		logger.info(mProduct.toString());
		
		productDAO.add(mProduct);
		return "redirect:/manage/products?operation=product"  ;
		
		
	}

	
	// returning categories for all the request mapping 
	@ModelAttribute("categories")
	public List<Category> getCategories(){
		
		return categoryDAO.list();
	}
	}


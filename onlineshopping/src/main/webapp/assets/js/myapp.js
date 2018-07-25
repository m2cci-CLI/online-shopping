$(function() {
	//solving the active menu problem
	switch(menu){
	
	
	case 'About Us':
		$('#about').addClass('active');
		break;
		
	case 'Contact Us':
		$('#contact').addClass('active');
		break;
		
	case 'All Products':
		$('#listProducts').addClass('active');
		break;
		
	case 'Manage Products':
		$('#manageProducts').addClass('active');
		break;
		
	default :
		
		if(menu == "Home") break;
		$('#listProducts').addClass('active');
	    $('#a_'+menu).addClass('active');
		break;
	
		
	}
	
	var $table =$('#productListTable');
	if($table.length) {
		//console.log('Inside the table!;');
		
		var jsonUrl='';
		if(window.categoryId == ''){
			
			jsonUrl = window.contextRoot + '/json/data/all/products';
		}
		
		else {
			jsonUrl = window.contextRoot + '/json/data/category/'+window.categoryId+'/products';
		}
		
	
		$table.DataTable(  {
			lengthMenu:[[3,5,10,-1], ['3 Enregistrements ','5 Enregistrements ', '10 Enregistrements ','Tous']],
			pageLength :5,
			
ajax:{
				
				url:jsonUrl,
				dataSrc:''
				
			},
			
			columns :[
				
				{
					data : 'code',
					bSortable : false,
					mRender : function(data, type, row) {

						return '<img src="' + window.contextRoot
								+ '/resources/images/' + data
								+ '.jpg"   style="width:50px" style="height: 70px"/>';

					}
				},
				{
					data:'name'
				},
				
				{
					data:'brand'
				},

				{
					data:'unitPrice',
						mRender : function(data, type, row) {
							return '&#8364; ' + data
						}
					
				},
			
				{
					data : 'quantity',
					mRender : function(data, type, row) {

						if (data < 1) {
							return '<span style="color:red">Out of Stock!</span>';
						}

						return data;

					}
				},
				
				{
					bSortable : false,
					data : 'id',
					mRender : function(data, type, row) {

						var str = '';
						str += '<a href="'
								+ window.contextRoot
								+ '/show/'
								+ data
								+ '/product" class="btn btn-primary"><span class="glyphicon glyphicon-eye-open"></span></a> &#160;';

						if (row.quantity < 1) {
							str += '<a href="javascript:void(0)" class="btn btn-success disabled"><span class="glyphicon glyphicon-shopping-cart"></span></a>';
						} else {

							str += '<a href="'
									+ window.contextRoot
									+ '/cart/add/'
									+ data
									+ '/product" class="btn btn-success"><span class="glyphicon glyphicon-shopping-cart"></span></a>';
						}
						
						return str;

					}

				}
				
				]
			
			
	
		});
	
	
	
	
	}
	
	
	
	/* for fading out the alert message after  seconds */
	$alert = $('.alert');
	if($alert.length) {
		setTimeout(function() {
	    	$alert.fadeOut('slow');
		   }, 3000
		);		
	}
			
	
	//-----------------------------
	
	
	
//
//
	 var $adminProductsTable =$('#adminProductsTable');
		if($adminProductsTable.length) {
			//console.log('Inside the table!;');
			
			var jsonUrl = window.contextRoot + '/json/data/admin/all/products';
			
			
		
			$adminProductsTable.DataTable(  {
				lengthMenu:[[10,30,50,-1], ['10 Enregistrements ','30 Enregistrements ', '50 Enregistrements ','Tous']],
				pageLength :30,
				
	ajax:{
					
					url:jsonUrl,
					dataSrc:''
					
				},
				
				columns :[
					{
						
						data:'id'
					},
					
					{
						data : 'code',
						bSortable : false,
						mRender : function(data, type, row) {

							return '<img src="' + window.contextRoot
									+ '/resources/images/' + data
									+ '.jpg"   style="width:50px" style="height: 70px class="adminDataTableImg"/>';

						}
					},
					{
						data:'name'
					},
					
					{
						data:'brand'
					},

					
				
					{
						data : 'quantity',
						mRender : function(data, type, row) {

							if (data < 1) {
								return '<span style="color:red">Out of Stock!</span>';
							}

							return data;

						}
					},
					
					{
						data:'unitPrice',
							mRender : function(data, type, row) {
								return '&#8364; ' + data
							}
						
					},
					
					{
						data : 'active',
						bSortable : false,
						mRender : function(data, type, row) {
							var str = '';
							if(data) {											
								str += '<label class="switch"> <input type="checkbox" value="'+row.id+'" checked="checked">  <div class="slider round"> </div></label>';
								
							}else {
								str += '<label class="switch"> <input type="checkbox" value="'+row.id+'">  <div class="slider round"> </div></label>';
							}
							
							return str;
						}
					},
					{
						data : 'id',
						bSortable : false,
						mRender : function(data, type, row) {

							var str = '';
							str += '<a href="'
									+ window.contextRoot
									+ '/manage/'
									+ data
									+ '/product" class="btn btn-primary"><span class="glyphicon glyphicon-pencil"></span></a> &#160;';

							return str;
						}
					}					           	
					],
					
					
					initComplete: function(){
						var api = this.api();
						api.$('.switch input[type="checkbox"]').on('change',function() {
							 
							 var checkbox = $(this);
							 var checked = checkbox.pro('checked');
							 var dMsg =(checked)? 'You want to activate the product?':
								                  'You want to deactivate the product?';
							 
							 var value = checkbox.prop('value');
							 
							 bootbox.confirm({
								 
								 size : 'medium',
						         title: 'Product Activation & Deactivation',
								 message : dMsg,
								 callback:function(confirmed){
									 
									 if(confirmed){
										 console.log(value);
										 
										 var activationUrl =windox.contextRoot +'/manage/product' + value +'/activation';
										 $.post(activationUrl, function(data){
											 
										 
										 
										 bootbox.alert({
											 size : 'medium',
									         title: 'Information',
											 message : 'You are going to perform operation on product' + value
											 
										 });
										 });
										 
									 }
									 else {
										 checkbox.prop('checked',!checked);
										 
									 }
									 
								 }


								 
								 
								 
							 });
							 
						 });
					}
				
				
		
			});
		
		
		
		
		}
	
	
	
	
});
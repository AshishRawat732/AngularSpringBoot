import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-product-list',
 templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit{



  products: Product[] = [];
  currentCategoryId: number=1;
  previousCategoryId: number=1;
  currentCategoryName: string= "";
  searchMode: boolean= false;


  //new properties of pagination
  thePageNumber: number=1;
  thePageSize: number=5;
  theTotalElements: number=0;

  previousKeyword: string="";

  constructor(private productService: ProductService, private route: ActivatedRoute,
       private CartService: CartService){}

  ngOnInit(){
    this.route.paramMap.subscribe(()=> {
      this.listProducts();
    });
  }

  listProducts() {

   this.searchMode= this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
     this.handleSearchProducts();
    }else{
      this.handlelistProducts();
    }
   
  }

  handleSearchProducts() {
   const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
      
   //if we have a different keyword than previous
   //then set thePageNumber to 1

   if(this.previousKeyword!=theKeyword){
    this.thePageNumber=1;
   }

   this.previousKeyword = theKeyword;
    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);
    

  //  this.productService.searchProducts(theKeyword).subscribe(
  //   data => {
  //     this.products=data;
  //  })

   this.productService.searchProductsPaginate(this.thePageNumber-1,
                                         this.thePageSize,
                                         theKeyword).subscribe(this.processResult());

  }







  

  handlelistProducts(){
    //check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      //get the "id" param string. convert string to a  number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;

      //get the "name" param string
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
    } else{
      // not category id available ...  default to category id 1
      this.currentCategoryId=1;
      this.currentCategoryName='Books';
    }
    
  //  check if we have a different categoryid than previous category id
  //  Note: Angular will resuse a component if it is currently viewed


  //   if we have a different categoryid than previous category id
  //  then set pageNumber back to 1

    if(this.previousCategoryId!=this.currentCategoryId){
      this.thePageNumber=1;
    }

    this.previousCategoryId= this.currentCategoryId;
    console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);
    




    //now get the products for the given category id
    // this.productService.getProductList(this.currentCategoryId).subscribe(
    //   data =>{
    //     this.products = data;
    //   })

    this.productService.getProductListPaginate(this.thePageNumber-1,
    this.thePageSize, this.currentCategoryId).subscribe(this.processResult());
  }


  updatePageSize(pageSize: string) {
    this.thePageSize = +pageSize;
    this.thePageNumber=1;
    this.listProducts();
    }

  processResult(){
    return (data: any) => {
      this.products = data._embedded.products;
      this.thePageNumber= data.page.number + 1 ;
      this.thePageSize= data.page.size;
      this.theTotalElements= data.page.totalElements;
    } 
  }


  addToCart(theProduct: Product) {
    console.log(`Adding to cart: ${theProduct.name}, ${theProduct.unitPrice}`);

    //TODO ... do the real work

    const theCartItem = new CartItem(theProduct);
    this.CartService.addToCart(theCartItem);
    }

}
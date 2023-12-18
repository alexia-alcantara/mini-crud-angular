import { Component } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

//Services
import { FoodListService } from 'src/app/services/food-list.service';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService){}

  ngOnInit(): void{
    // this.foodList = this.foodListService.foodList();
    this.foodListService.foodList().subscribe({
      next: (res) => this.foodList = res,
      error: (error) => console.log(error)
    }
      
    )
    // this.foodListService.foodList().subscribe(
    //   res => res,
    //   error => error
    // )

    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Você adicionou => ${res.nome}`);
        return this.foodList.push(res);
      }
    );
  }

  public foodListEdit(value: string, id: number){
    this.foodListService.foodListEdit(value, id).subscribe({
      next: (res) => console.log(res),
      error: (error) => error
    })
  }
  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe({
      next: (res) => this.foodList = this.foodList.filter(
        item => {
          return id !== item.id
        }
      ),
      error: (error) => error
    })
  }
}

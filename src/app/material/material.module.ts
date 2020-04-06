/**
 * core module
 */
import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule, MatListModule, MatAutocompleteModule, MatInputModule, MatDialogModule,MatFormFieldModule,MatCheckboxModule
} from "@angular/material";

@NgModule({
  imports: [MatButtonModule,MatIconModule,MatListModule,MatAutocompleteModule,MatInputModule,MatFormFieldModule,MatDialogModule,MatCheckboxModule
  ],
  exports: [MatButtonModule,MatIconModule,MatListModule,MatAutocompleteModule,MatInputModule,MatFormFieldModule,MatDialogModule,MatCheckboxModule
  ]
})
export class MaterialModule {}

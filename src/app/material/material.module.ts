/**
 * core module
 */
import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule, MatListModule, MatAutocompleteModule, MatInputModule, MatDialogModule
  ,    MatFormFieldModule,
} from "@angular/material";

@NgModule({
  imports: [MatButtonModule,MatIconModule,MatListModule,MatAutocompleteModule,MatInputModule,MatFormFieldModule,MatDialogModule
  ],
  exports: [MatButtonModule,MatIconModule,MatListModule,MatAutocompleteModule,MatInputModule,MatFormFieldModule,MatDialogModule
  ]
})
export class MaterialModule {}

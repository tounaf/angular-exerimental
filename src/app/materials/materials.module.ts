import {NgModule} from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatSelectModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatDatepickerModule, MatStepperModule, MatBadgeModule, MatChipsModule, MatTooltipModule, MatSlideToggleModule, MatGridTile,
} from '@angular/material';
import {FulfillingBouncingCircleSpinnerModule} from 'angular-epic-spinners';
// import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
// import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {AngularFontAwesomeModule} from 'angular-font-awesome';

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({

  declarations: [
  ],
  exports: [
    MatToolbarModule,
    MatChipsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatStepperModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatRadioModule,
    FulfillingBouncingCircleSpinnerModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,
    FormsModule,
    // FlexLayoutModule,
    // AngularFontAwesomeModule,
    MatSlideToggleModule,
    MatGridListModule,
  ]
})
export class MaterialsModule {}

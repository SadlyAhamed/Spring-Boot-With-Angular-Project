import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { CorporatesComponent } from './corporates/corporates.component';

import { DeliverymanComponent } from './deliveryman/deliveryman.component';
import { ExecutiveOfficeComponent } from './executive-office/executive-office.component';
import { AdminComponent } from './admin/admin.component';
import { BookingInfoComponent } from './booking-info/booking-info.component';
import { DriversComponent } from './drivers/drivers.component';
import { CorporatesBookingComponent } from './corporates-booking/corporates-booking.component';
import { SenderInfoComponent } from './sender-info/sender-info.component';
import { ReceiptInfoComponent } from './receipt-info/receipt-info.component';
import { ParcelDetailsComponent } from './parcel-details/parcel-details.component';
import { TrackingDetailsComponent } from './tracking-details/tracking-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderdeshboardComponent } from './orderdeshboard/orderdeshboard.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { DeliverymanDashBoardComponent } from './deliveryman-dash-board/deliveryman-dash-board.component';
import { ReceivedProductListComponent } from './received-product-list/received-product-list.component';
import { DeliveryProductListComponent } from './delivery-product-list/delivery-product-list.component';
import { DeliverySidebarComponent } from './delivery-sidebar/delivery-sidebar.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CorporatesAdminComponent } from './corporates-admin/corporates-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    AboutComponent,
    UserhomeComponent,
    CorporatesComponent,
    DeliverymanComponent,
    ExecutiveOfficeComponent,
    AdminComponent,
    BookingInfoComponent,
    DriversComponent,
    CorporatesBookingComponent,
    SenderInfoComponent,
    ReceiptInfoComponent,
    ParcelDetailsComponent,
    TrackingDetailsComponent,
    UserDetailsComponent,
    BookingStatusComponent,
    LoginformComponent,
    SignupComponent,
    ProfileComponent,
    OrderdeshboardComponent,
    AdminSidebarComponent,
    OrderDetailsComponent,
    DeliverymanDashBoardComponent,
    ReceivedProductListComponent,
    DeliveryProductListComponent,
    DeliverySidebarComponent,
    AllOrdersComponent,
    ContactUsComponent,
    CorporatesAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

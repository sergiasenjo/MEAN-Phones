import { Routes, RouterModule } from '@angular/router';
import { PhoneListComponent } from '../phone-list/phone-list.component';
import { PhoneDetailComponent } from '../phone-detail/phone-detail.component';

const AppRoutes: Routes = [
    // Main
    { path: '', component: PhoneListComponent, data: {title: 'Phone List'}},
    { path: 'phone/:id', component: PhoneDetailComponent, data: {title: 'Phone Detail'}},

    // Otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(AppRoutes);
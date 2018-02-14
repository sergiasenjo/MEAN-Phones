import { Routes, RouterModule } from '@angular/router';
import { PhoneListComponent } from '../phone-list/phone-list.component';

const AppRoutes: Routes = [
    // Main
    { path: '', component: PhoneListComponent, data: {title: 'Phone List'}},

    // Otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(AppRoutes);
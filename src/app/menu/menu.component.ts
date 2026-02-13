import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  sections = [
    {
      id: 1,
      name: 'Тип 1',
      items: [
        { id: 1, name: 'Item 1', value: 20, selected: false },
        { id: 2, name: 'Item 2', value: 30, selected: false },
        { id: 3, name: 'Item 3', value: 40, selected: false },
        { id: 4, name: 'Item 4', value: 50, selected: false }
      ]
    },
    {
      id: 2,
      name: 'Тип 2',
      items: [
        { id: 5, name: 'Item 5', value: 15, selected: false },
        { id: 6, name: 'Item 6', value: 25, selected: false },
        { id: 7, name: 'Item 7', value: 35, selected: false }
      ]
    }
  ];

  currentSection = this.sections[0];

  selectSection(section: any) {
    this.currentSection = section;
  }

  getSelectedCount() {
    if (!this.currentSection) return 0;
    return this.currentSection.items.filter((item: any) => item.selected).length;
  }

  getTotalValue() {
    if (!this.currentSection) return 0;
    return this.currentSection.items
      .filter((item: any) => item.selected)
      .reduce((sum: number, item: any) => sum + item.value, 0);
  }

  updateCounts() {
  }
}
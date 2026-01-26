import { Component } from '@angular/core';
import { PullBadge } from './pull-badge/pull-badge';
import { SkillTitle } from './skill-title/skill-title';
import { StackDescribtion } from './stack-describtion/stack-describtion';
import { StackIcons } from './stack-icons/stack-icons';

@Component({
  selector: 'app-skill-set',
  imports: [PullBadge, SkillTitle, StackDescribtion, StackIcons],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss',
})
export class SkillSet {}

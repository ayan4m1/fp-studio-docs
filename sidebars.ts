import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  navSidebar: [
    { type: 'doc', id: 'get_started', label: 'Get Started' },
    { type: 'doc', id: 'user_guide', label: 'User Guide' },
    { type: 'doc', id: 'prompting_guide', label: 'Prompting Guide' },
    { type: 'doc', id: 'lora_list', label: 'Video LoRA List' }
  ]
};

export default sidebars;

<?php
/**
 * Implements hook_form_FORM_ID_alter()
 */

// modify our search form
function arrowhead_form_search_block_form_alter(&$form, &$form_state) {

  // apply to all search_block forms
  $form['search_block_form']['#attributes']['placeholder'] = 'Search our site...';
  $form['actions']['submit']['#attributes']['class'] = array('show-for-sr');

  // modify the layout classes for the sidebar search
  if ($form['#id'] == 'search-block-form') {
    $form['search_block_form']['#prefix'] = '';
    $form['search_block_form']['#suffix'] = '';
    $form['actions']['submit']['#prefix'] = '';
    $form['actions']['submit']['#suffix'] = '';
  }
}

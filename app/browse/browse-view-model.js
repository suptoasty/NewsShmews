import { fromObject } from '@nativescript/core'

import { SelectedPageService } from '../shared/selected-page-service'

export function BrowseViewModel() {
  SelectedPageService.getInstance().updateSelectedPage('Browse')

  const viewModel = fromObject({
    /* Add your view model properties here */
  })

  return viewModel
}


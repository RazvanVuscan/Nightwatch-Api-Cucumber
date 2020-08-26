const practicePageLocators = {
  nameInput: () => '#name', //gasit dand click dreapta, copy CSS selector

  // acesta este un locator generic care accepta un parametru si formateaza adresa catre locator pe baza lui
  radioButtonLocator: (buttonNumber) =>
    // cu ${parametru} se poate introduce cod in interiorul unui String.
    `#radio-btn-example input[value=radio${buttonNumber}]`,
  autosuggestInputField: () => 'input[id=autocomplete]', // un locator complex care cauta pe baza unei proprietati a tipului de element specificat
  autosuggestDropdown: () => '#ui-id-1',
  autosuggestResults: () => 'div[id*=ui-id-]', // un locator complex care cauta toate elementele care contin parte dintr-un locator
  dropdown: () => '#dropdown-class-example',
  dropdownValues: () => '#dropdown-class-example > option',
  switchWindow: () => '#openwindow',
  switchTab: () => '#opentab',
  alertButton: () => '#alertbtn',
  confirmButton: () => '#confirmbtn',
  tableData: () => '#product > tbody > tr:nth-child(2) > td:nth-child(2)',
  tabelDataValue: (row, column) =>
    `#product > tbody > tr:nth-child(${row}) > td:nth-child(${column})`,
  hideButton: () => '#hide-textbox',
  showButton: () => '#show-textbox',
  mouseHover: () => '#mousehover',
  mouseHoverContent: () => '.mouse-hover-content',
  headerTitlePage: () => 'body > h1:nth-child(2)',
};

module.exports = practicePageLocators;

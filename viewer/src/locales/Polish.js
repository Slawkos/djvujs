export default {
    // language info
    englishName:
        "Polish",
    nativeName:
        "Рolski",

    "Language":
        "Język", // not used now, but will be used in options afterwards

    // Translation: tooltips and notification
    // (to see the notification window, remove several phrases from any dictionary, except for the English one)
    "Add more":
        "Dodaj więcej",
    "The translation isn't complete.":
        "Niepełne tłumaczenie.",
    "The following phrases are not translated:":
        "Poniższe zwroty nie są przetłumaczone:",
    "You can improve the translation here":
        "Tutaj możesz poprawić tłumaczenie:",

    // Initial screen
    "#helpButton - learn more about the app":
        "#helpButton - dowiedz się więcej o programie",
    "#optionsButton - see the available options":
        "#optionsButton - zmiana ustawień",
    "powered with":
        "Na podstawie",
    "Drag & Drop a file here or click to choose manually":
        "Przeciągnij i upuść plik tutaj lub kliknij, aby wybrać go ręcznie",
    "Paste a URL to a djvu file here":
        "Wklej link do pliku .djvu",
    "Open URL":
        "Otwórz link",
    'Enter a valid URL (it should start with "http(s)://" | "data:")': // an alert shown when you try to open an empty URL
        'Wprowadź poprawny link (musi zaczynać się od "http(s)://" | "data:")',

    // Errors. Usually there is a header and a message for each error type.
    // For the web request error there are different types of messages depending on the HTTP status.
    // The ways to see the errors in the viewer are described in comments below.
    // In case of web requests you can load links via the browser extension (via the URL field on the initial screen)
    "Error":
        "Błąd",
    "Error on page":
        "Błąd na stronie", // Open 'library/assets/czech_indirect/index.djvu
    "Network error":
        "Błąd sieci", // Disable internet connection and try to load something by URL
    "Check your network connection":
        "Sprawdź swoje połączenie internetowe",
    // Load any URL to a nonexistent page on the Internet,
    // e.g. https://djvu.js.org/nonexistentpage
    "Web request error":
        "Żądanie internetowe nieudane",
    "404 Document not found":
        "404 Nie znaleziono żadnego dokumentu",
    "403 Access forbidden":
        "403 Odmowa dostępu",
    "500 Internal server error":
        "500 Wewnętrzny błąd serwera",
    "The request failed with HTTP status #status":
        " Żądanie nie powiodło się ze statusem HTTP #status",
    "DjVu file is corrupted": // Open "/library/assets/czech_indirect/dict0085.iff"
        "Plik DjVu uszkodzony",
    "The file doesn't comply with the DjVu format specification or it's not a whole DjVu document":
        "Plik nie spełnia specyfikacji formatu DjVu lub nie jest całością dokumentu DjVu",
    "Incorrect file format": // Open a not-djvu file.
        "Nieprawidłowy format pliku",
    "The provided file is not a DjVu document":
        "Pobrany plik nie jest dokumentem DjVu",
    // Load a URL to a DjVu file with "#page=100500" at the end (both in continuous scroll and single-page view modes)
    // e.g. https://djvu.js.org/assets/djvu_examples/DjVu3Spec.djvu#page=100500
    "Incorrect page number":
        "Nieprawidłowy numer strony",
    "There is no page with the number #pageNumber":
        "Numerowane strony #pageNumber nie istnieje",
    // "baseURL" is a URL to a document directory,
    // all links inside the document index.djvu are considered relative to this URL.
    // The term "base URL" can be translated as "a URL to the document's folder".
    "No base URL for an indirect DjVu document":  // Open "/library/assets/czech_indirect/index.djvu"
        "Brak linku do katalogu dokumentów",
    "You probably opened an indirect (multi-file) DjVu document manually.":
        "Prawdopodobnie ręcznie otworzyłeś pośredni (wieloplikowy) dokument DjVu.",
    "But such multi-file documents can be only loaded by URL.":
        "Takie dokumenty można pobrać tylko przez link.",
    "Unexpected error": // Of course there is no standard way to produce this kind of error
        "Nieoczekiwany błąd",
    "Cannot print the error, look in the console":
        "Nie mogę wyświetlić błędu w formie tekstowej, sprawdź w konsoli",

    // Options and its tooltips
    "Options":
        "Ustawienia",
    "Show options window":
        "Otwórz okno ustawień",
    "Color theme":
        "Schemat kolorystyczny",
    "Extension options":
        "Ustawienia rozszerzenia", // the options of the browser extension
    "Open all links with .djvu at the end via the viewer":
        "Otwórz wszystkie linki z rozszerzeniem .djvu w przeglądarce",
    "All links to .djvu files will be opened by the viewer via a simple click on a link":
        "Wszystkie linki z rozszerzeniem .djvu będą otwierane w przeglądarce po kliknięciu w link",
    "Detect .djvu files by means of http headers":
        "Identyfikacja plików .djvu według nagłówków http",
    "Analyze headers of every new tab in order to process even links which do not end with the .djvu extension":
        "Analizuj nagłówki każdej nowej zakładki, aby zidentyfikować pliki nawet bez rozszerzenia .djvu w linku",

    // Footer: status bar
    "Ready":
        "Gotowe",
    "Loading":
        "Ładuje",

    // Footer: buttons' tooltips
    "Show help window":
        "Pokaż okno pomocy",
    "Switch full page mode":
        "Tryb przełączania na całą stronę",

    // File Block tooltips
    "Choose a file":
        "Wybierz plik",
    "Close document":
        "Zamknij dokument",
    "Save document":
        "Zapisz dokument",
    "Save":
        "Zapisz",
    "Open another .djvu file":
        "Otwórz kolejny plik .djvu",

    // Help window
    "The application for viewing .djvu files in the browser.":
        "Aplikacja do przeglądania plików .djvu w przeglądarce.",
    "If something doesn't work properly, feel free to write about the problem at #email.":
        "Jeśli coś nie działa, napisz do #email.",
    "The official website is #website.":
        "Oficjalna strona internetowa #website.",
    "The source code is available on #link.":
        "Kod źródłowy jest dostępny na #link.",
    "Hotkeys":
        "Skróty klawiszowe",
    "save the document":
        "Zapisz dokument",
    "go to the previous page":
        "Przejdź na poprzednią stronę",
    "go to the next page":
        "Przejdź do następnej strony",
    "Controls":
        "Guziki",
    "#expandIcon and #collapseIcon are to switch the viewer to the full page mode and back.":
        "#expandIcon i #collapseIcon przełączają program w tryb pełno stronicowy i z powrotem.",
    "If you work with the browser extension, these buttons will cause no effect, since the viewer takes the whole page by default.":
        "Jeśli używasz rozszerzenia do przeglądarki, te przyciski nie działają, ponieważ aplikacja domyślnie zajmuje całą stronę.",

    // Toolbar tooltips
    "Continuous scroll view mode":
        "Tryb ciągłego przewijania",
    "Number of pages in a row":
        "Liczba stron na linijkę",
    "Number of pages in the first row":
        "Liczba stron w pierwszej linijce",
    "Single page view mode":
        "Tryb jednostronicowy",
    "Text view mode":
        "Tryb tekstowy",
    "Click on the number to enter it manually":
        "Kliknij numer, aby wpisać go ręcznie",
    "Rotate the page":
        "Obróć stronę",
    "You also can scale the page via Ctrl+MouseWheel":
        "Możesz też powiększyć stronę przez Ctrl+Scroll",
    "Text cursor mode":
        "Kursor do zaznaczenia tekstu",
    "Grab cursor mode":
        "Tryb przeciągnij i upuść",
    "Table of contents":
        "Spis treści",
    "Toolbar is always shown":
        "Pasek narzędziowy zawsze widoczny",
    "Toolbar automatically hides":
        "Autoukrywanie paska narzędzi",

    // Contents
    "Contents":
        "Spis treści",
    "No contents provided":
        "Brak treści",
    // A rare case. Open /library/assets/links.djvu in the viewer on https://djvu.js.org/ (not in the extension!)
    // and click the "Absolute Link" in the contents
    "The link points to another document. Do you want to proceed?":
        "Link prowadzi do kolejnego dokumentu. Chcesz kontynuować?",

    // Text Block (shown in the text view mode)
    "No text on this page":
        "Na tej stronie nie ma tekstu",

    // Save dialog (shows when you save an indirect djvu)
    "You are trying to save an indirect (multi-file) document.":
        "Próbujesz zapisać dokument składający się z wielu plików.",
    "What exactly do you want to do?":
        "Co dokładnie chcesz robić?",
    "Save only index file":
        "Zachowaj tylko spis treści",
    "Download, bundle and save the whole document as one file":
        "Pobierz, zbuduj i zapisz cały dokument w jednym pliku",
    "Downloading and bundling the document":
        "Pobierz i złóż dokument",
    "The document has been downloaded and bundled into one file successfully":
        "Dokument został pomyślnie pobrany i skompilowany w jednym pliku",

    // Printing
    "Print document":
        "Drukuj dokument",
    "Pages must be rendered before printing.":
        "Strony muszą być renderowane przed drukiem.",
    "It may take a while.":
        "To może zająć trochę czasu.",
    "Select the pages you want to print.":
        "Wybierz strony do wydruku.",
    "From":
        "Od",
    "to":
        "do",
    "Prepare pages for printing":
        "Przygotuj strony do wydruku",
    "Preparing pages for printing":
        "Przygotowanie stron do druku",

    // Menu
    "Menu":
        "Menu",
    "Document":
        "Dokument",
    "About":
        "O aplikacji",
    "Print":
        "Drukowanie",
    "Close":
        "Zamknij",
    "View mode":
        "Tryb wyświetlania",
    "Scale":
        "Powiększenie",
    "Rotation":
        "Obróć",
    "Cursor mode":
        "Kursor",
    "Full page mode":
        "Tryb pełnostronicowy",
    "Fullscreen mode":
        "Tryb pełnoekranowy",
};

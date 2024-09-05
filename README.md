# Webreader XHTML Issue Reproduction

This repository demonstrates an issue we are currently facing with Webreader when working with XHTML files.

## Overview

This repository was created specifically to showcase a scenario where the error occurs. In this case, we attempt to use an `<img>` tag in an XHTML file, which results in the following error message when launching the Webreader:

```
ReadSpeaker.Core.js?v=3.8.5.2613:1 Uncaught (in promise) SyntaxError: Failed to set the 'innerHTML' property on 'Element': The provided markup is invalid XML, and therefore cannot be inserted into an XML document.
    at init (ReadSpeaker.Core.js?v=3.8.5.2613:1:94947)
    at Object.item (ReadSpeaker.Core.js?v=3.8.5.2613:1:121548)
    at Object.parseTag (ReadSpeaker.Core.js?v=3.8.5.2613:1:328865)
    at Object.extractTags (ReadSpeaker.Core.js?v=3.8.5.2613:1:327806)
    at ReadSpeaker.Core.js?v=3.8.5.2613:1:327394
```

## Reproducing the Issue

To reproduce the issue, observe line #32 in the [public/test.xhtml](./public/test.xhtml) file. If you comment out this line, the Webreader will function correctly in both HTML and XHTML files.

### Identified Cases

The following cases have been identified to cause the same error message:

1. Using an `<img>` tag in an XHTML file breaks the highlighting.
2. Using a `<br />` tag in an XHTML file breaks the highlighting.
3. Encapsulated HTML entities (e.g., `&nbsp;`) in an XHTML file break the highlighting.

We believe there may be other cases that trigger the same error, but so far, only these three have been identified.

## Assistance Needed

If you have any insights or suggestions to resolve this issue, please let us know. Thank you for your assistance!

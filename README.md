# Music Festival Inventory App

## Concept
As part of the production team at Movement Music Festival - a nearly 3-decade old dance music (techno) festival - we track close to 500 pieces of backline (largely DJ) equipment. The software that the production team uses currently is outdated and the UI/UX is boring, horrible, and confusing, not to mention the sole developer no longer lives. There are also many holes in the process that, if filled, will streamline the **initiation**, **planning**, and **execution** parts of backline management. Fed up with the old, we opted to make our own. Not only do we want to clean up the functionality, but we also want to expand the usability as to make EVERYONE'S lives easier, from artist managers to stage managers to the production compound crew. There are many elements to this project and it will continue to grow in functionality for many years to come!


## User Stories
### Initiation:
01. As as **artist manager**, I can create a unique login for myself. 
02. As an **artist manager**, after logging in, I can fill out a form that allows me to share all details re: all gear (CDJs, turntables, specific needles, mixers, isolators, effects processors, etc.), model names and quantity, how said gear should be set up (via an uploaded PDF), as well as my artist’s performance date, time, and stage location. 
03. As an **artist manager**, I can specify priorities #1-3 within any given category. 
04. As an **artist manager**, I will no longer be able to access this form after a certain date determined by the **production coordinator**.
05. As a **production coordinator**, I can login with master admin credentials. After login, I will view a different page than artist managers, where I can view all of the submissions from artist managers. This data can be viewed in different organizations, including by gear type, model, performance date & time/location (calendar-ish view).

### Planning:
01. As a **production coordinator**, I can create an inventory list for all PROCURED inventory that includes the following data for each item: bar-code #, model name, current location, current owner, current condition (in case of damage), rental company, and any misc notes.
02. As a **production coordinator**, I can create custom barcode text for each item with a corresponding barcode simultaneously generated.
03. As a **production coordinator**,  I can export a CSV file which includes inventory barcode text and barcodes. This CSV file can be sent to a label printer. 


### Execution:
01. As a **production coordinator**, I can create stage owner “profiles” that include the following fields: stage name, stage manager name, phone number, email, intern name, intern phone number.
02. As a **production coordinator**, I can create tickets to initiate a transaction that is linked to a specific stage owner. Ticket fields include: Check in date & time, check out day & time, misc notes. 

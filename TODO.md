# TODO

- [ ] Pages
  - [x] todo/item & edit
  - [ ] num of the page to query params (URL)
  - [ ] To improve UX - decrese await of changes state (useOptimistic)
- [x] Style sheets
  - [x] mobile
  - [x] desktop
  - [ ] transition all for TodoPage
  - [ ] isLoading state for cards - border gradient & animation
  - [x] Card ~~overflow~~ modal
  - [x] Pagination - stick to the bottom
- [x] API JSONPlaceHolder
  - [x] user
- [x] Store
  - [x] ~~MobX~~ Redux
- [x] React Router
- [x] Layouts
  - [x] Header
    - [x] SideBar/NavBar
      - [x] styles
  - [x] Footer
- [ ] Testing (vitest)
- [ ] In case of error 
  - [ ] Add retry

## FIX
- [x] Mobile width (TodoPage Cards)
- [ ] Desktop (2 column)
- [ ] TodoPage - pagination: if delete all cards on the last page then the store fetch all entities again (may be crashed)

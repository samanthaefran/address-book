export default function Root() {
  return (
    <>
      <div id="sidebar"> {/* css was not loading properly at first, it was because my id name here was written differently than in the css file */}
        <h1>react-router-contacts</h1>
        <div>
          <form id="search-form" role="search">  {/* role is used for accessibility for users, screen readers will tell the user what this form does */}
            <input
              id="q"
              aria-label="search contacts"
              place-holder="search"
              type="search"
              name="q"
            />
            <div
              className="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href="{`contacts/1`}">Samantha</a>
            </li>
            <li>
              <a href="{`contacts/2`}">Brandon</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  )
}
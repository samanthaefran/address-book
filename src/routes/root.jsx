import { 
  Link, 
  Outlet,
  useLoaderData,
} from "react-router-dom"
import {getContacts} from "../contacts"

export async function loader() {
  const contacts = await getContacts();
  return { contacts }
}

export default function Root() {
  const { contacts } = useLoaderData();
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
          {contacts.lenght ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                      {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )} {" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              )
              )}
            </ul>
          ) : ( 
            <p> 
              <i> No contacts </i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}
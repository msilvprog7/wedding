import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { FaRegHeart } from "react-icons/fa";
import Heading from "./components/Heading";
import Headline from "./components/Headline";
import ImageOverlay from "./components/ImageOverlay";
import PersonCard from "./components/PersonCard";
import useInitialWindowWidth from "./hooks/InitialWindowWidth";
import Files from "./utilities/Files";

import "./App.css";

/**
 * App functional component for displaying the main
 * content of the site.
 * @returns App's main content
 */
function App() {
  // Adjust headline background photos on mobile.
  const useDesktopHeadlineImage = useInitialWindowWidth() >= 768;
  const headlineImage1 = useDesktopHeadlineImage
    ? Files.from("images", "headline", "wedding.jpg")
    : Files.from("images", "headline", "wedding-mobile.jpg");
  const headlineImage2 = useDesktopHeadlineImage
    ? Files.from("images", "headline", "registry.jpg")
    : Files.from("images", "headline", "registry-mobile.jpg");
  const headlineImage3 = useDesktopHeadlineImage
    ? Files.from("images", "headline", "gallery.jpg")
    : Files.from("images", "headline", "gallery-mobile.jpg");
  // Return main content of the App.
  return (
    <div>
      <Navbar id="navbar" expand="lg">
        <Container className="p-3">
          <Navbar.Brand href="#wedding">
            Emily <FaRegHeart /> Michael
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#wedding">Wedding</Nav.Link>
              <Nav.Link href="#rsvp">RSVP</Nav.Link>
              <Nav.Link href="#bridal-party">Bridal Party</Nav.Link>
              <Nav.Link href="#plan">Plan</Nav.Link>
              <Nav.Link href="#thanks">Thanks</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Headline image={headlineImage1}>
        <Heading id="wedding" className="shifted">
          <Heading.Title>Wedding</Heading.Title>
          <Heading.Subtitle>
            We're delighted to gather on <b>Saturday December 11th, 2021 </b>
            with family and friends to celebrate our marriage.
          </Heading.Subtitle>
          <Heading.Body>
            <Row>
              <Col md={4}>
                <ImageOverlay
                  src={Files.from("images", "wedding", "columbia.png")}
                  alt="Columbia Winery"
                  href="https://goo.gl/maps/Kesg1mG5J8MGupKK6"
                />
              </Col>
              <Col md={4}>
                <ImageOverlay
                  src={Files.from("images", "wedding", "hands.jpg")}
                  alt="Oly Photography"
                  href="http://www.olyphotography.com/"
                />
              </Col>
              <Col md={4}>
                <ImageOverlay
                  src={Files.from(
                    "images",
                    "wedding",
                    "columbia-barrel-room.jpg"
                  )}
                  alt="A Platinum Event Catering"
                  href="https://aplatinumevent.com/"
                />
              </Col>
            </Row>
          </Heading.Body>
        </Heading>
      </Headline>
      <Heading id="rsvp">
        <Heading.Title>RSVP</Heading.Title>
        <Heading.Subtitle>
          Please RSVP by <b>Monday November 15th, 2021</b>.
          <br />
          <br />
          We will be following local guidance for COVID restrictions. Please
          either be vaccinated or have negative COVID test within 48 hours
          before the wedding.
          <br />
          <br />
          Thank you!
        </Heading.Subtitle>
        <Heading.Body>
          <Row>
            <Col md={4}>
              <ImageOverlay
                src={Files.from("images", "rsvp", "rsvp.png")}
                alt="RSVP"
                href="https://forms.gle/e3Ds28qCJrpMrUBW9"
              />
            </Col>
            <Col md={4}>
              <ImageOverlay
                src={Files.from("images", "rsvp", "registry.png")}
                alt="Registry"
                href="https://www.target.com/gift-registry/gift-giver?registryId=517da360-09bd-11ec-a949-e193129bcc48&type=WEDDING"
              />
            </Col>
          </Row>
        </Heading.Body>
      </Heading>
      <Headline image={headlineImage2}>
        <Heading id="bridal-party">
          <Heading.Title>Bridal Party</Heading.Title>
          <Heading.Subtitle>Our esteemed guests of honor</Heading.Subtitle>
          <Heading.Body>
            <Row>
              <Col md={4}>
                <PersonCard
                  name="Robyn Seely"
                  title="Maid of Honor"
                  src={Files.from("images", "party", "robyn.jpg")}
                  blurb="Emily and Robyn met in 2012 in the prime of their youth at WSU. They became friends when experiencing the shared trauma of Chem 105 and stayed close ever since. They're even memorialized on the wall of the WSU visitor center. Robyn also got a front row seat to our engagement when she showed up earlier than Michael planned."
                />
              </Col>
              <Col md={4}>
                <PersonCard
                  name="Emily Strode"
                  title="Bridesmaid"
                  src={Files.from("images", "party", "strode.jpg")}
                  blurb="Emily and Strode were forced together as they were both Emilys in the Cougar Marching Band. Their friendship began when Emily casually offered Strode a room in their rental house in Pullman. It was then that Emily and Robyn learned that Strode was just a cool dude who loved dogs and avocados."
                />
              </Col>
              <Col md={4}>
                <PersonCard
                  name="Beth Hines"
                  title="Bridesmaid"
                  src={Files.from("images", "party", "beth.jpg")}
                  blurb="Oh man, Emily and Beth have known each other for too long now. They met in middle school when Beth deemed Emily cool enough to sit with at lunch. They reunited at WSU, since Emily had moved away in HS, and they both decided to be science nerds. Beth and Emily celebrated their 10yr friendiversary (about 5 yrs ago) with matching DNA tattoos."
                />
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <PersonCard
                  name="Daniel Winker"
                  title="Best Man"
                  src={Files.from("images", "party", "daniel.jpg")}
                  blurb="Daniel became best friends with Michael in the 4th grade when both were obsessed with Kirby Air Rider and tried to make a card game for it (even though neither are particular card game fans). They both later on were very involved in robotics and studied together at UVA. Whenever they're together, it's like they were never apart."
                />
              </Col>
              <Col md={4}>
                <PersonCard
                  name="Harley Patrick"
                  title="Groomsman"
                  src={Files.from("images", "party", "harley.png")}
                  blurb="Harley, Daniel, and Michael formed a trio back in 5th grade, to do what - it's not quite clear, but they all enjoy hanging out, cracking jokes, and building robits. Much of high school and college breaks were spent at Taco Bell. Michael misses these good times a lot and enjoys whenever the group gets together."
                />
              </Col>
              <Col md={4}>
                <PersonCard
                  name="Daniel Lavaty"
                  title="Groomsman"
                  src={Files.from("images", "party", "dp.png")}
                  blurb="Daniel joined the group of friends in 11th grade when Michael and Daniel would goof off in English class - they notably accidentally started Dress Well Thursdays. The last 2 years of high school were quite fun with everyone building robots and eating fast food, chilling at the other Daniel's house."
                />
              </Col>
            </Row>
          </Heading.Body>
        </Heading>
      </Headline>
      <Heading id="plan">
        <Heading.Title>Plan</Heading.Title>
        <Heading.Subtitle>
          Hotels are available in Woodinville, Kirkland, Redmond, and Bellevue
          with relatively short commute to the venue.
        </Heading.Subtitle>
        <Heading.Body>
          <Row>
            <Col md={4}>
              <ImageOverlay
                src={Files.from("images", "plan", "hampton-inn.png")}
                alt="Hampton Inn, Woodinville"
                href="https://goo.gl/maps/zE1vQAKACG9fJYkx8"
              />
            </Col>
            <Col md={4}>
              <ImageOverlay
                src={Files.from("images", "plan", "marriott.png")}
                alt="Marriott, Redmond"
                href="https://goo.gl/maps/4uhSigDJqqx4rKRm6"
              />
            </Col>
            <Col md={4}>
              <ImageOverlay
                src={Files.from("images", "plan", "willows-lodge.png")}
                alt="Willows Lodge, Woodinville"
                href="https://goo.gl/maps/EqJH2DmRBCQKVTB2A"
              />
            </Col>
          </Row>
        </Heading.Body>
        <Heading.Subtitle>Restaurants we enjoy.</Heading.Subtitle>
        <Heading.Body>
          <Row>
            <Col md={4}>
              <ImageOverlay
                src={Files.from("images", "plan", "din-tai-fung.jpg")}
                alt="Din Tai Fung, Bellevue"
                href="https://goo.gl/maps/LozjDJbAWXHz4kpX7"
              />
            </Col>
            <Col md={4}>
              <ImageOverlay
                src={Files.from("images", "plan", "cactus.png")}
                alt="Cactus, Kirkland"
                href="https://g.page/cactus-kirkland"
              />
            </Col>
            <Col md={4}>
              <ImageOverlay
                src={Files.from("images", "plan", "woodinville-cafe.jpg")}
                alt="Woodinville Cafe"
                href="https://goo.gl/maps/VaiEP93xhhmSBoU69"
              />
            </Col>
          </Row>
        </Heading.Body>
        <Heading.Subtitle>Attractions we enjoy.</Heading.Subtitle>
        <Heading.Body>
          <Row>
            <Col md={4}>
              <ImageOverlay
                src={Files.from("images", "plan", "chihuly.jpg")}
                alt="Chihuly Garden and Glass"
                href="https://goo.gl/maps/dKgP9risy8MW2t1o8"
              />
            </Col>
            <Col md={4}>
              <ImageOverlay
                src={Files.from("images", "plan", "space-needle.jpg")}
                alt="Space Needle"
                href="https://goo.gl/maps/Ydpujmnpu94VxfpR9"
              />
            </Col>
            <Col md={4}>
              <ImageOverlay
                src={Files.from("images", "plan", "mopop.png")}
                alt="Museum of Pop Culture"
                href="https://g.page/MoPOPSeattle"
              />
            </Col>
          </Row>
        </Heading.Body>
      </Heading>
      <Headline image={headlineImage3}>
        <Heading id="thanks" className="shifted">
          <Heading.Title>Thanks</Heading.Title>
          <Heading.Subtitle>
            Thanks for the love and support over the years, we appreciate it and
            look forward to celebrating our marriage with you!
          </Heading.Subtitle>
        </Heading>
      </Headline>
    </div>
  );
}

/**
 * Export the App.
 */
export default App;

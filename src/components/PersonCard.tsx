import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

/**
 * Props for PersonCard
 */
interface PersonCardProps {
  /**
   * Name of the Person
   *
   * Example: Michael
   */
  name: string;

  /**
   * Title of the Person
   *
   * Example: Groom
   */
  title: string;

  /**
   * Source of the image
   *
   * Example: images/profile/me.png
   */
  src: string;

  /**
   * Few sentences to describe the
   * person.
   *
   * Example: Michael is a software engineer
   * and made this website. It's a great
   * way to learn React Bootstrap.
   */
  blurb: string;
}

/**
 * A container that displays the Person's image as a
 * rounded circle, lists their name, title, and blurb.
 * These are expected to be lined up with one another
 * in rows and columns.
 *
 * Example:
 * <PersonCard
 *    name="Michael"
 *    title="Groom"
 *    src="images/profile/me.png"
 *    blurb="Michael is a software engineer and made this website. It's a great way to learn React Bootstrap." />
 */
class PersonCard extends React.Component<PersonCardProps> {
  render() {
    return (
      <Container className="p-3 person-card">
        <Image
          className="person-card-image"
          roundedCircle
          src={this.props.src}
          alt={this.props.name}
        />
        <div className="person-card-name">{this.props.name}</div>
        <div className="person-card-title">{this.props.title}</div>
        <div className="person-card-blurb">{this.props.blurb}</div>
      </Container>
    );
  }
}

/**
 * Exports the PersonCard.
 */
export default PersonCard;

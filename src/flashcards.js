import React from 'react';
import { Card, Button, Image, Grid, Header, Divider, Segment, Icon, Rating } from 'semantic-ui-react';
import './flashcards.css';


function Flashcard(props) {
    return (
        <Card link color={props.color}>
            <Card.Content>
                <Card.Header>{props.header}</Card.Header>
                <Card.Meta>{props.meta}</Card.Meta>
                <Card.Meta>
                    <Rating maxRating={5} defaultRating={props.rating} icon="star" size="mini"></Rating>
                </Card.Meta>
                <Card.Description size="small" className="card-description">{props.description}</Card.Description>
            </Card.Content>
        </Card>
    );
}


function Course(props) {
    return (
        <Segment className="no-border">
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                            <Header as="h3">{props.courseName}</Header>
                        <Divider></Divider>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Card.Group itemsPerRow={3}>
                            <Flashcard 
                                color="olive" 
                                header="DSDM Principle 1" 
                                meta="Focus on the Business Need" 
                                rating={3} 
                                description="Every decision taken during a project should be viewed in the light of the overriding project goal - to deliver what the business needs to be delivered, when it needs to be delivered."
                                />

                            <Flashcard color="red"
                                header="DSDM Principle 2"
                                meta="Deliver on Time"
                                rating={2}
                                description="Delivering a solution on time is a very desirable outcome for a project and is quite often the single most important success factor. Late delivery can often undermine the very rationale for a project, especially where market opportunities or legal deadlines are involved." />

                            <Flashcard color="blue"
                                header="DSDM Principle 3"
                                meta="Collaborate"
                                rating={1}
                                description="Teams that work in a spirit of active cooperation and commitment will always outperform groups of individuals working only in loose association." />
                        </Card.Group>
                    </Grid.Column>
                    
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button floated="right">
                            <Icon name="add"></Icon>
                            <span>Add Card</span>    
                        </Button>     
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

class FlashcardHolder extends React.Component {
    constructor(props) {
        super(props);
    }

    // get data package here


    render() {
        return (
            <div>
                <Course courseName="Project Management" />
                <Course courseName="Project Management" />
                <Course courseName="Project Management" />
                <Course courseName="Project Management" />
            </div>
        );
    }
}

export default FlashcardHolder;

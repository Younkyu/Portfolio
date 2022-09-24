import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

function HoverText({ labelText, image, altText }) {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            { labelText }
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <Card className="box-container skill-container">
                <Card.Img variant="top" src={image} alt={altText} />
            </Card>
        </OverlayTrigger>
    );
}

export default HoverText;
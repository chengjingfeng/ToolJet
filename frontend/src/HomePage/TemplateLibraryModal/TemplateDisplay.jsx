import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Badge } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { getSvgIcon } from '@/_helpers/appUtils';

export default function TemplateDisplay(props) {
  const { id, name, description, sources } = props?.app ?? {};
  const componentRef = useRef(null);
  const [isloaded, setLoaded] = useState(false);

  useEffect(() => {
    if (componentRef.current) {
      setLoaded(true);
    }
  }, [componentRef]);

  return (
    <div className="template-display" ref={componentRef}>
      <Container fluid className="pt-2">
        <Row style={{ height: '10%' }}>
          <h3 className="title">{name}</h3>
          <p className="description">{description}</p>
          <span>
            {sources?.map((source) => (
              <Badge
                className="me-2"
                variant="primary"
                key={source.id}
                style={{
                  backgroundColor: '#D2DDEC',
                  color: 'black',
                  width: 'auto',
                  height: 30,
                  fontWeight: 400,
                  textTransform: 'none',
                }}
              >
                <div className="d-flex py-2">
                  <div
                    className="d-flex flex-rows align-items-center justify-content-center"
                    style={{ backgroundColor: 'white', borderRadius: 20, height: 20, width: 20 }}
                  >
                    {getSvgIcon(source.id, 14, 14)}
                  </div>
                  <div className="d-flex flex-rows align-items-center ms-1">{source.name}</div>
                </div>
              </Badge>
            ))}
          </span>
        </Row>
        <Row className="align-items-center justify-content-center" style={{ height: '88%' }}>
          {isloaded && (
            <LazyLoad>
              <img
                className="template-image"
                src={`/assets/images/templates/${id}${props.darkMode ? '-dark' : ''}.png`}
              />
            </LazyLoad>
          )}
        </Row>
      </Container>
    </div>
  );
}

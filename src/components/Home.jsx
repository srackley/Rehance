import React from 'react';
import Project from './Project';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          link: 'https://www.behance.net/gallery/61153519/Superfiction-Art-work-2017-Daily-Life',
          title: 'Superfiction Art Work 2017',
          owners: 'Superfiction',
          ownerLink: 'https://www.behance.net/superfiction',
          field: 'Graphic Design',
          appreciate: '108',
          views: '1183',
          badge: true
        }
      ]
    };
  }

  render() {
    return (
      <div className="Home">
        <div className="header" />
        <div className="sticky-wrapper" />
        <div id="site-content">
          <div className="projects">
            <div className="project-covers">
              {this.state.projects ? this.state.projects.map((project, i) =>
                <Project project={project} key={i} />) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

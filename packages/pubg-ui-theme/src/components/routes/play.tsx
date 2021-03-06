import React from 'react';

import Typography from 'components/typography';
import styled from 'styled';
import { withOptions, OptionProps, Region, SquadSize, Perspective } from 'pubg-ui';

const Button = styled.button`
  padding: ${props => props.theme.unit(1)};
  margin: ${props => props.theme.unit(.6)};

  &.active {
    color: #fff;
  }
`;

const Play = styled.div`
  flex-direction: column;
`;

const regionMap: { [key in Region]: string } = {
  na: 'North America',
  eu: 'Europe',
  as: 'Asia',
  jp: 'Japan',
  oc: 'Oceanic',
  sa: 'South America',
  sea: 'Sea'
};

const squadMap: { [key in SquadSize]: string } = {
  solo: 'Solo',
  duo: 'Duo',
  squad: 'Squad'
};

const perspectiveMap: { [key in Perspective]: string } = {
  'first-person': 'First-Person',
  'third-person': 'Third-Person'
};

interface Props { }

export class PlayComponent extends React.Component<Props & OptionProps> {

  constructor() {
    super();
  }

  renderRegions() {
    return Object.keys(regionMap).map((region: Region) => {
      const regionName = regionMap[region];
      const className = region === this.props.option.region ? 'active' : '';

      return (
        <Button
          key={region}
          className={className}
          onClick={() => this.props.setOption.setRegion(region)}
        >
          {regionName}
        </Button>
      );
    });
  }

  renderSquads() {
    return Object.keys(squadMap).map((squad: SquadSize) => {
      const squadName = squadMap[squad];
      const className = squad === this.props.option.squadSize ? 'active' : '';

      return (
        <Button
          key={squad}
          className={className}
          onClick={() => this.props.setOption.setSquadSize(squad)}
        >
          {squadName}
        </Button>
      );
    });
  }

  renderPerspectives() {
    return Object.keys(perspectiveMap).map((perspective: Perspective) => {
      const perspectiveName = perspectiveMap[perspective];
      const className = perspective === this.props.option.perspective ? 'active' : '';

      return (
        <Button
          key={perspective}
          className={className}
          onClick={() => this.props.setOption.setPerspective(perspective)}
        >
          {perspectiveName}
        </Button>
      );
    });
  }

  render() {
    return (
      <Play>
        <Typography type="menu-main-sm">Region</Typography>
        <div>
          {this.renderRegions()}
        </div>
        <Typography type="menu-main-sm">Squad Size</Typography>
        <div>
          {this.renderSquads()}
        </div>
        <Typography type="menu-main-sm">Perspective</Typography>
        <div>
          {this.renderPerspectives()}
        </div>
        <Typography type="menu-main">Play</Typography>
      </Play>
    );
  }
}

export default withOptions<Props>(PlayComponent);

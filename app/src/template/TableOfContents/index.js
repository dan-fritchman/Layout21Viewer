
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import * as Scroll from "react-scroll/modules";
import Hidden from "@material-ui/core/Hidden";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import withStyles from "@material-ui/core/styles/withStyles";

import Store from "../Store";
import { toCapWords } from "../utils";


class TableOfContents extends React.Component {
    render() {
        if (!this.props.loaded) return null;

        const { title, chapterTitles, chapterNum } = this.props;

        return <React.Fragment>
            <Stepper activeStep={chapterNum} orientation="vertical">
                {chapterTitles.map((title, n) => {
                    const completed = chapterNum > n;
                    const disabled = n > chapterNum;

                    // Default title: "Chapter {num}"
                    let renderTitle = title || "Chapter " + toCapWords(n + 1);
                    if (completed) renderTitle = `${n + 1}. ` + renderTitle;
                    return <Step completed={completed} disabled={disabled} key={n}>
                        <StepLabel>
                            <Scroll.Link to={`${n}`} offset={-100} smooth={true} duration={500}>
                                {renderTitle}
                            </Scroll.Link>
                        </StepLabel>
                    </Step>;
                })}
            </Stepper>
        </React.Fragment>;
    }
}

export default Store.connect(state => {
    if (!state.contents) return { loaded: false };
    return {
        loaded: true,
        title: state.contents.title,
        chapterTitles: state.contents.map(id => (
            state.contents.chaptersById[id].title
        )),
        chapterNum: state.contents.chapterNum,
    }
})(TableOfContents);

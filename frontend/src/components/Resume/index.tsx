import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

import { useTranslation } from 'react-i18next';

// import Logo from '../../assets/img/oxford-logo.png';
import BMULogoIn from '../../assets/img/inpe-logo.png';
import BMULogoNa from '../../assets/img/nature-logo.png';
import BMULogoAg from '../../assets/img/agile-logo.png';
import BMULogoOx from '../../assets/img/oxford-logo.png';
import BMULogoNe from '../../assets/img/netzero-logo.png';
import resumeEn from '../../assets/img/resume-en.png';
import resumePt from '../../assets/img/resume-pt.png';

type ResumeProps = {
  open: boolean;
  onClose: () => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonDefault: {
      backgroundColor: '#24806F',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#24806F',
      },
    },
    imgContent: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      margin: '12px 16px 8px 16px',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        marginBottom: 16,
      },
    },
    imgLogo: {
      height: 70,
      marginLeft: 64,
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        marginTop: 8,
      },
    },
    imgResumeTable: {
      width: '90%',
      height: '100%',
      marginBottom: 0,
      margin: 'auto',
      [theme.breakpoints.down('xs')]: {
        marginBottom: 16,
      },
    },
    imgBMULogo: {
      height: 120,
      marginTop: 16,
      marginBottom: 0,
      marginLeft: 15,
      [theme.breakpoints.down('xs')]: {
        marginBottom: 16,
      },
    },
    contentDialogTitile: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
        fontSize: '16px',
        flexWrap: 'wrap',
        textAlign: 'center',
      },
    },
    dialogInfo: {
      [theme.breakpoints.up('xl')]: {
        fontSize: '14px',
      },
    },
  }),
);

function Resume({ open, onClose }: ResumeProps) {
  const classes = useStyles();
  const [scroll] = React.useState<DialogProps['scroll']>('paper');

  const { t } = useTranslation();

  const getImageOfResumeTable = () => {
    if (t('Language') === 'pt') {
      return resumePt;
    }
    return resumeEn;
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        open={open}
        onClose={onClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {/* <div className={classes.contentDialogTitile}> */}
          {t('Title')}
          {/* <img src={Logo} className={classes.imgLogo} alt="Restore" /> */}
          {/* </div> */}
        </DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            align={'justify'}
            style={{ marginBottom: '0' }}
            className={classes.dialogInfo}
          >
            {t('Resume.part01')}

            <strong>
              <a
                href="https://onlinelibrary.wiley.com/doi/10.1111/gcb.16984"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('Resume.part02')}
              </a>
            </strong>

            {t('Resume.part03')}
          </DialogContentText>

          <div className={classes.imgContent}>
            <img
              src={getImageOfResumeTable()}
              className={classes.imgResumeTable}
              alt="Restore+"
            />
          </div>

          <div className={classes.imgContent}>
            <a
              href="https://www.naturebasedsolutionsinitiative.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={BMULogoNa}
                className={classes.imgBMULogo}
                alt="Nature-logo"
              />
            </a>
            <a
              href="https://netzeroclimate.org/innovation-for-net-zero/nature-based-solutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={BMULogoNe}
                className={classes.imgBMULogo}
                alt="Netzero-logo"
              />
            </a>
            <a
              href="https://www.agile-initiative.ox.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={BMULogoAg}
                className={classes.imgBMULogo}
                alt="Agile-logo"
              />
            </a>
            <a
              href="https://www.ox.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={BMULogoOx}
                className={classes.imgBMULogo}
                alt="Oxford-logo"
              />
            </a>
            <a
              href="https://www.gov.br/inpe/pt-br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={BMULogoIn}
                className={classes.imgBMULogo}
                alt="Inpe-logo"
              />
            </a>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} className={classes.buttonDefault}>
            {t('ReportAllBiomes.buttonClose')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default React.memo(Resume);

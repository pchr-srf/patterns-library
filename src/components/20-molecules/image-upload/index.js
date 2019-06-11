import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/input-file';
import { classMap } from 'lit-html/directives/class-map';
import {
  DeleteSvg,
  ImageUploadGroupSvg,
  PlusRoundedSvg,
  UploadCloudSvg,
  TickSvg,
} from './icons';
/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import { fileKey } from './utils/fileKey';
import compressImage from './utils/imageCompressor';
import makeImageFigure from './utils/makeImageFigure';

const OR = 'or';
const INFO = 'Drag and drop to upload your file';

// TODO -> move all icons to materials
const DeleteIcon = svg([DeleteSvg]);
const ImageUploadGroupIcon = svg([ImageUploadGroupSvg]);
const PlusRoundedIcon = svg([PlusRoundedSvg]);
const UploadCloudIcon = svg([UploadCloudSvg]);
const TickIcon = svg([TickSvg]);

class AXAImageUpload extends LitElement {
  static get tagName() {
    return 'axa-image-upload';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      inputFileText: { type: String },
      maxSizeFileMB: { type: Number },
      maxNumberOfFiles: { type: Number },
      showImageOverview: { type: Boolean },
      onClick: { type: Function },
    };
  }

  constructor() {
    super();
    this.inputFileText = 'Upload file';
    this.maxSizeFileMB = 15;
    this.maxNumberOfFiles = 10;
    this.showImageOverview = false;
    this.onClick = () => {};

    this.allImagesInput = [];
    this.finalFiles = [];
    this.wrongFiles = [];
  }

  firstUpdated() {
    this.dropZone = this.shadowRoot.querySelector('.js-image-upload__dropzone');
    this.addImageButton = this.shadowRoot.querySelector(
      '.js-image-upload__icon-hover-area'
    );
  }

  render() {
    const classes = {
      'm-image-upload__dropzone-file-overview': this.showImageOverview,
    };
    return html`
      <article class="m-image-upload">
        <h1><slot></slot></h1>
        <section
          @dragover="${this.handleImageUploadDropZoneDragover}"
          @dragleave="${this.handleImageUploadDropZoneDragleave}"
          @drop="${this.handleImageUploadDropZoneDrop}"
          @click="${this.handleImageUploadDropZoneClick}"
          class="m-image-upload__dropzone js-image-upload__dropzone ${classMap(
            classes
          )}"
        >
          ${!this.showImageOverview
            ? html`
                <div class="m-image-upload__icons">
                  ${ImageUploadGroupIcon}
                </div>
                <p class="m-image-upload__information">${INFO}</p>
                <p class="m-image-upload__or">${OR}</p>
                <axa-input-file
                  accept="image/jpg, image/jpeg, application/pdf, image/png"
                  multiple
                  @change=${this.handleImageUploadButtonChange}
                  variant="red"
                >
                  ${this.inputFileText}
                </axa-input-file>
              `
            : ``}
        </section>
      </article>
    `;
  }

  handleImageUploadButtonChange(e) {
    const { files } = e.target;
    this.addFiles(files);
  }

  handleImageUploadDropZoneDragover(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';

    this.dropZone.classList.add('m-image-upload__dropzone_dragover');
  }

  handleImageUploadDropZoneDragleave() {
    this.dropZone.classList.remove('m-image-upload__dropzone_dragover');
  }

  handleImageUploadDropZoneDrop(e) {
    e.preventDefault();
    this.dropZone.classList.remove('m-image-upload__dropzone_dragover');
    const { files } = e.dataTransfer;
    this.addFiles(files);
  }

  async addFiles(droppedFiles) {
    // alle pdfs compress all images. pngs will become jpes and unrecognised files will be deleted
    const pdfs = [...droppedFiles].filter(file => ~file.type.indexOf('pdf'));
    const compressedImages = await compressImage(droppedFiles);
    const finalFiles = pdfs.concat(compressedImages);
    const wrongFiles = [];
    for (let i = 0; i < droppedFiles.length; i++) {
      const dKey = fileKey(droppedFiles[i], true);
      if (!finalFiles.some(finalFile => fileKey(finalFile, true) === dKey)) {
        wrongFiles.push(droppedFiles[i]);
      }
    }

    this.finalFiles = finalFiles;
    this.wrongFiles = wrongFiles;
    this.showImageOverview = true;

    this.loadImages();
  }

  loadImages() {
    Array.from(this.finalFiles).forEach(file =>
      makeImageFigure(this.dropZone, file)
    );
  }
}

defineOnce(AXAImageUpload.tagName, AXAImageUpload);

export default AXAImageUpload;

'use-strict';
import React, { Component } from 'react';

import {Editor, EditorState, RichUtils, getDefaultKeyBinding} from 'draft-js';

import OLIcon from './../assets/icons/format_list_numbered.svg';
import ULIcon from './../assets/icons/format_list_bulleted.svg';
import BIcon from './../assets/icons/text-bold.svg';
import IIcon from './../assets/icons/text-italic.svg';
import UIcon from './../assets/icons/text-underline.svg';
import TextIcon from './../assets/icons/text.svg';
import ACIcon from './../assets/icons/textalign-center.svg';
import ALIcon from './../assets/icons/textalign-left.svg';
import ARIcon from './../assets/icons/textalign-right.svg';
import SCIcon from './../assets/icons/smallcaps.svg';
import LIcon from './../assets/icons/link-2.svg';
import CIcon from './../assets/icons/code.svg'

import './TextEditor.css'
class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4, /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  render() {
    const {editorState} = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }
    
    return (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this.mapKeyToEditorCommand}
            onChange={this.onChange}
            placeholder="Start writing your article here..."
            ref="editor"
            useRef="editor"
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

class StyleButton extends Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle} title={this.props.label}>
        {this.props.svg ? <img src={this.props.svg} alt="" /> : this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  //{label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item', svg: ULIcon},
  {label: 'OL', style: 'ordered-list-item', svg: OLIcon},
  {label: 'Code Block', style: 'code-block', svg: CIcon},
];

const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      <span className='label'>Headings</span>
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          svg={type.svg}
        />
      )}
    </div>
  );
};

var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD', svg: BIcon},
  {label: 'Italic', style: 'ITALIC', svg: IIcon},
  {label: 'Underline', style: 'UNDERLINE', svg: UIcon},
  {label: 'Monospace', style: 'CODE'},
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          svg={type.svg}
        />
      )}
    </div>
  );
};
// const blockStyleFn = (block) => {
//   let alignment = 'left';
//   block.findStyleRanges((e) => {
//     if (e.hasStyle('center')) {
//       alignment = 'center';
//     }
//     if (e.hasStyle('right')) {
//       alignment = 'right';
//     }
//   });
//   return `editor-alignment-${alignment}`;
// };

// const alignmentStyles = ['left', 'right', 'center'];
// const applyAlignment = (newStyle) => {
//     let styleForRemove = alignmentStyles.filter(style => style !== newStyle);
//     let currentContent = editorState.getCurrentContent();
//     let selection = editorState.getSelection();
//     let focusBlock = currentContent.getBlockForKey(selection.getFocusKey());
//     let anchorBlock = currentContent.getBlockForKey(selection.getAnchorKey());
//     let isBackward = selection.getIsBackward();

//     let selectionMerge = {
//       anchorOffset: 0,
//       focusOffset: focusBlock.getLength(),
//     };

//     if (isBackward) {
//       selectionMerge.anchorOffset = anchorBlock.getLength();
//     }
//     let finalSelection = selection.merge(selectionMerge);
//     let finalContent = styleForRemove.reduce((content, style) => Modifier.removeInlineStyle(content, finalSelection, style), currentContent);
//     let modifiedContent = Modifier.applyInlineStyle(finalContent, finalSelection, newStyle);
//     const nextEditorState = EditorState.push(editorState, modifiedContent, 'change-inline-style');
//     setEditorState(nextEditorState);
//   };

export default TextEditor;
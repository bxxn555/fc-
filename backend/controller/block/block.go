package ctrl_block

import (
	"errors"

	"github.com/FX-KNUT/fc-/backend/entity"
	"github.com/FX-KNUT/fc-/backend/service"
)

const ERR_GET__BLOCK 			string	= "Error while getting a block by Idx: block.go in controller"
const ERR_GET__ALL_BLOCK 		string	= "Error while getting whole blocks: block.go in controller"
const ERR_GET__LATEST__BLOCK 	string	= "Error while getting the latest block: block.go in controller"
const ERR_GET__LATEST__Idx 	string	= "Error while getting the latest Idx of block: block.go in controller"
const ERR_UPDATE_BLOCK 		 	string 	= "Error while updating a block: block.go in controller"
const ERR_SAVE_BLOCK		 	string	= "Error while saving a block: block.go in controller"
const ERR_DELETE_BLOCK			string	= "Error while deleting a block: block.go in controller"

type Block entity.Block

type struct_block_controller struct {
	service service.Block_service
}

type Block_controller interface {
	GetBlock(int) (Block, error)
	GetAllBlocks() ([]Block, error)
	GetLatestBlock() (Block, error)
	GetLatestIdx() (int, error)
	UpdateBlock(Block) error
	SaveBlock(Block) error
	CalculateHash() (string, error)
}

func (b *struct_block_controller) GetBlock(Idx int) (Block, error) {
	block := Block{}

	block, err := b.GetBlock(Idx)
	if err != nil {
		return block, errors.New(ERR_GET__BLOCK)
	}

	return block, nil
}

func (b *struct_block_controller) GetAllBlocks() ([]Block, error) {
	blocks := []Block{}

	blocks, err := b.GetAllBlocks()
	if err != nil {
		return blocks, errors.New(ERR_GET__ALL_BLOCK)
	}

	return blocks, nil
}
func (b *struct_block_controller) GetLatestBlock() (Block, error) {
	block := Block{}
	block, err := b.GetLatestBlock()
	if err != nil {
		return block, errors.New(ERR_GET__LATEST__BLOCK)
	}

	return block, nil
}

func (b *struct_block_controller) GetLatestIdx() (int, error) {
	var Idx int
	Idx, err := b.GetLatestIdx()
	if err != nil {
		return -1, errors.New(ERR_GET__LATEST__Idx)
	}

	return Idx, nil

}

func (b *struct_block_controller) UpdateBlock(block Block) error {
	err := b.UpdateBlock(block)

	if err != nil {
		return errors.New(ERR_UPDATE_BLOCK)
	}

	return nil
	
}

func CalculateHash() (string, error) {
	// to do 
	return "??????", nil
}